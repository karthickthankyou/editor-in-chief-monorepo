import { CreateFeedbackInput } from './create-feedback.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Feedback } from '@prisma/client'

@InputType()
export class UpdateFeedbackInput extends PartialType(CreateFeedbackInput) {
  id: Feedback['id']
}
