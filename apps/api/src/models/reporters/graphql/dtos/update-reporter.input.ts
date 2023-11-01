import { CreateReporterInput } from './create-reporter.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Reporter } from '@prisma/client'

@InputType()
export class UpdateReporterInput extends PartialType(CreateReporterInput) {
  uid: Reporter['uid']
}
