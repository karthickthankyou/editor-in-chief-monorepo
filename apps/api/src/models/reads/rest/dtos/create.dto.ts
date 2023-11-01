import { OmitType } from '@nestjs/swagger'
import { ReadEntity } from '../entity/read.entity'

export class CreateRead extends OmitType(ReadEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
