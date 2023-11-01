import { PartialType } from '@nestjs/swagger'
import { CreateFeedback } from './create.dto'
import { Feedback } from '@prisma/client'

export class UpdateFeedback extends PartialType(CreateFeedback) {
  id: Feedback['id']
}
