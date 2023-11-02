import { Injectable } from '@nestjs/common'

import { Index, Pinecone, RecordMetadata } from '@pinecone-database/pinecone'

import { Article } from 'src/models/articles/graphql/entity/article.entity'
import OpenAI from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources'
import { INDEX_NAME } from './constants'
import { FeedbackType, User } from '@prisma/client'

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

  createEmbedding(content: string) {
    return this.openAI.embeddings.create({
      input: content,
      model: 'text-embedding-ada-002',
    })
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

  private calculateNewVector(
    userVector: number[],
    articleVector: number[],
    scale: number,
  ): number[] {
    // Move user vector towards or away from the article vector based on feedback scale.
    return userVector.map(
      (value, index) => value + scale * (articleVector[index] - value),
    )
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

    console.log(`Found ${queryResponse.matches.length} matches...`)
    console.log('queryResponse.matches', queryResponse.matches)

    console.log(`Asking question: ${question}...`)
    if (queryResponse.matches.length) {
      const messages: ChatCompletionMessageParam[] = queryResponse.matches.map(
        (match) => ({
          content: `${match.metadata.title} ${match.metadata.body}`,
          role: 'system',
        }),
      )

      messages.push({ content: question, role: 'user' })

      console.log('messages: ', messages)

      const chatCompletion = await this.openAI.chat.completions.create({
        messages,
        model: 'gpt-3.5-turbo',
        max_tokens: 100,
      })

      console.log(`Answer: ${JSON.stringify(chatCompletion)}`)
      return chatCompletion.choices
        .map((choice) => choice.message.content)
        .join(' ')
    } else {
      console.log('Since there are no matches, GPT-3 will not be queried.')
    }
  }
}
