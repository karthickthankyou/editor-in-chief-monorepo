import { Field, ObjectType } from '@nestjs/graphql'
import { Read as ReadType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Read implements RestrictProperties<Read, ReadType> {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string
  articleId: number
  count: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
