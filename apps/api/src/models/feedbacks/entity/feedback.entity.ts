import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { $Enums, Feedback as FeedbackType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType($Enums.FeedbackType, { name: 'FeedbackType' })

@ObjectType()
export class Feedback implements RestrictProperties<Feedback, FeedbackType> {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string
  articleId: number

  @Field(() => $Enums.FeedbackType)
  type: $Enums.FeedbackType
}
