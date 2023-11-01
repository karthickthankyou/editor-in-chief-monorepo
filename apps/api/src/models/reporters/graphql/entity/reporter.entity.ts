import { ObjectType } from '@nestjs/graphql'
import { Reporter as ReporterType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Reporter implements RestrictProperties<Reporter, ReporterType> {
  uid: string
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
