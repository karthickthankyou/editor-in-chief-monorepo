import { CreateReadInput } from './create-read.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Read } from '@prisma/client'

@InputType()
export class UpdateReadInput extends PartialType(CreateReadInput) {
  id: Read['id']
}
