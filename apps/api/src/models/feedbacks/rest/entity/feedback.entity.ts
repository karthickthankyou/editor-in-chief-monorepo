import { Feedback, FeedbackType } from '@prisma/client'
import { IsDate, IsString, IsOptional, IsInt, IsEnum } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class FeedbackEntity
  implements RestrictProperties<FeedbackEntity, Feedback>
{
  @IsInt()
  id: number

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsString()
  uid: string

  @IsInt()
  articleId: number

  @IsEnum(FeedbackType)
  type: FeedbackType
}
