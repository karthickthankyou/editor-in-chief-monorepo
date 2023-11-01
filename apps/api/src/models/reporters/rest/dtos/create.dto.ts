import { OmitType } from '@nestjs/swagger'
import { ReporterEntity } from '../entity/reporter.entity'

export class CreateReporter extends OmitType(ReporterEntity, [
  'createdAt',
  'updatedAt',
]) {}
