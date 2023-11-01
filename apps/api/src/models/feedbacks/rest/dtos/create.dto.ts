import { OmitType } from '@nestjs/swagger'
import { FeedbackEntity } from '../entity/feedback.entity'

export class CreateFeedback extends OmitType(FeedbackEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
