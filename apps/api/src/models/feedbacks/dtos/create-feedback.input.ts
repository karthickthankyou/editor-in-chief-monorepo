import { InputType, PickType } from '@nestjs/graphql'
import { Feedback } from '../entity/feedback.entity'

@InputType()
export class CreateFeedbackInput extends PickType(
  Feedback,
  ['uid', 'articleId', 'type'],
  InputType,
) {}
