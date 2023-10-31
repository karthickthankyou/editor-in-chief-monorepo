import { InputType, PickType } from '@nestjs/graphql'
import { Read } from '../entity/read.entity'

@InputType()
export class CreateReadInput extends PickType(
  Read,
  ['articleId', 'uid'],
  InputType,
) {}
