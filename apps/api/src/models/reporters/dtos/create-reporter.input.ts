import { InputType, PickType } from '@nestjs/graphql'
import { Reporter } from '../entity/reporter.entity'

@InputType()
export class CreateReporterInput extends PickType(
  Reporter,
  ['uid'],
  InputType,
) {}
