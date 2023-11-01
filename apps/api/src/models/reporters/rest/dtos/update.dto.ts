import { PartialType } from '@nestjs/swagger'
import { CreateReporter } from './create.dto'
import { Reporter } from '@prisma/client'

export class UpdateReporter extends PartialType(CreateReporter) {
  uid: Reporter['uid']
}
