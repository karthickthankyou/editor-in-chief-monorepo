import { Injectable } from '@nestjs/common'

import {
  Index,
  Pinecone,
  RecordMetadata,
  RecordMetadataValue,
} from '@pinecone-database/pinecone'

import { Article } from 'src/models/articles/graphql/entity/article.entity'
import OpenAI from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources'
import { INDEX_NAME } from './constants'
import { FeedbackType } from '@prisma/client'

const MAX_TOKEN_LIMIT = 1600
@Injectable()
export class AIService {
  private readonly openAI: OpenAI
  private readonly pineconeIndex: Index<RecordMetadata>

  constructor() {
    this.openAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENV,
    })

    this.pineconeIndex = pinecone.Index(INDEX_NAME)
  }

  async giveFeedback({
    uid,
    articleId,
    type,
  }: {
    uid: string
    articleId: number
    type: FeedbackType
  }) {
    const { records } = await this.pineconeIndex.fetch([
      uid,
      articleId.toString(),
    ])

    const userRecord = records[uid]
    const articleRecord = records[articleId.toString()]

    if (!userRecord || !articleRecord) {
      throw new Error('User or article vector not found')
    }

    const userVector = userRecord.values
    const articleVector = articleRecord.values

    const adjustmentScale = this.getAdjustmentScale(type)

    const newUserVector = userVector.map(
      (value, index) =>
        value + adjustmentScale * (articleVector[index] - value),
    )

    await this.pineconeIndex.upsert([
      {
        id: uid,
        values: newUserVector,
        metadata: { type: 'user' },
      },
    ])
  }

  async queryRelatedArticles({
    uid,
  }: {
    uid: string
  }): Promise<{ id: string; score: number }[]> {
    console.log('queryRelatedArticles uid ', uid)
    const { records } = await this.pineconeIndex.fetch([uid])

    const userRecord = records[uid]

    if (!userRecord?.values) {
      console.log('userRecord', userRecord)
      throw new Error('User record not found.')
    }

    const queryResponse = await this.pineconeIndex.query({
      topK: 10,
      vector: userRecord.values,
      includeMetadata: false,
      includeValues: false,
      filter: { type: 'article' },
    })

    return queryResponse.matches.map(({ id, score }) => ({ id, score }))
  }

  async addUser({ uid }: { uid: string }) {
    const values = await this.createEmbedding('')

    this.pineconeIndex.upsert([
      {
        id: uid,
        values: values.data[0].embedding,
        metadata: {
          id: uid,
          type: 'user',
        },
      },
    ])
  }

  async addRecord({
    id,
    body,
    createdAt,
    published,
    reporterUid,
    tags,
    title,
    updatedAt,
  }: Article) {
    if (!published) {
      console.log('Article not published.')
      return
    }

    const article = {
      body,
      createdAt: createdAt.toISOString(),
      reporterUid,
      tags,
      title,
      updatedAt: updatedAt.toISOString(),
    }
    const combinedText = `${article.title} ${article.body} ${article.tags.join(
      ' ',
    )}`

    const values = await this.createEmbedding(combinedText)

    this.pineconeIndex.upsert([
      {
        id: id.toString(),
        values: values.data[0].embedding,
        metadata: { ...article, type: 'article' },
      },
    ])
  }

  async question(question) {
    const queryEmbedding = await this.createEmbedding(question)

    const queryResponse = await this.pineconeIndex.query({
      topK: 10,
      vector: queryEmbedding.data[0].embedding,
      includeMetadata: true,
      filter: { type: 'article' },
    })

    if (queryResponse.matches.length) {
      const messages: ChatCompletionMessageParam[] = this.constructChatMessages(
        queryResponse.matches.map(({ metadata }) => ({
          title: metadata.title,
          body: metadata.body,
        })),
        question,
      )

      const chatCompletion = await this.openAI.chat.completions.create({
        messages,
        model: 'gpt-3.5-turbo',
        max_tokens: 400,
      })

      console.log(`Answer: ${JSON.stringify(chatCompletion)}`)
      return chatCompletion.choices
        .map((choice) => choice.message.content)
        .join(' ')
    } else {
      console.log('Since there are no matches, GPT-3 will not be queried.')
    }
  }

  /**
   * Utils
   */
  private constructChatMessages = (
    articles: { title: RecordMetadataValue; body: RecordMetadataValue }[],
    userQuestion: string,
  ): ChatCompletionMessageParam[] => {
    const messages: ChatCompletionMessageParam[] = []

    // Add the user's question first.
    messages.push({
      content:
        'You are a helpful assistant who summarizes the news given below. If the below records do not have the information the user asking for, you have to start the answer saying the `editor in cheif` database does not have information about it but i help you from my knowledge.',
      role: 'system',
    })

    messages.push({
      content:
        'You are a helpful assistant. When providing information, first summarize from the news articles given below. If a users query is about information not contained in the articles, begin your response with "The editor-in-chief database does not contain specific details on this topic, but based on my knowledge, ..." and then provide a helpful summary from what you know.',
      role: 'system',
    })

    let currentTokenCount = this.estimateTokenCount(userQuestion)

    for (const article of articles) {
      const articleTokenCount = this.estimateTokenCount(
        article.title + ' ' + article.body,
      )

      console.log(
        'currentTokenCount, articleTokenCount',
        currentTokenCount,
        articleTokenCount,
      )

      // Check if adding the next article would exceed the token limit.
      if (currentTokenCount + articleTokenCount > MAX_TOKEN_LIMIT) break

      // Add article title and body to messages if it fits.
      messages.push({
        content: `${article.title} ${article.body}`,
        role: 'system',
      })
      currentTokenCount += articleTokenCount
    }

    messages.push({ content: userQuestion, role: 'user' })

    return messages
  }

  private estimateTokenCount(text: string): number {
    return text.split(/\s+/).length
  }

  private createEmbedding(content: string) {
    return this.openAI.embeddings.create({
      input: content,
      model: 'text-embedding-ada-002',
    })
  }

  private getAdjustmentScale(type: FeedbackType): number {
    switch (type) {
      case FeedbackType.LOVE:
        return 0.3
      case FeedbackType.LIKE:
        return 0.1
      case FeedbackType.DISLIKE:
        return -0.1
      case FeedbackType.HATE:
        return -0.3
      default:
        return 0
    }
  }
}
