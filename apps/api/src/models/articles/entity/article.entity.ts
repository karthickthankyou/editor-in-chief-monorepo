import { ObjectType } from '@nestjs/graphql'
import { Article as ArticleType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Article implements RestrictProperties<Article, ArticleType> {
  id: number
  createdAt: Date
  updatedAt: Date
  title: string
  body: string
  published: boolean
  tags: string[]
  reporterUid: string
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
