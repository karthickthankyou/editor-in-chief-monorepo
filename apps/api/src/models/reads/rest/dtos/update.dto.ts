import { PartialType } from '@nestjs/swagger'
import { CreateRead } from './create.dto'
import { Read } from '@prisma/client'

export class UpdateRead extends PartialType(CreateRead) {
  id: Read['id']
}
