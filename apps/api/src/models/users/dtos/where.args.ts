import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { AdminRelationFilter } from 'src/models/admins/dtos/where.args'
import { FeedbackListRelationFilter } from 'src/models/feedbacks/dtos/where.args'
import { ReadListRelationFilter } from 'src/models/reads/dtos/where.args'
import { ReporterRelationFilter } from 'src/models/reporters/dtos/where.args'

@InputType()
export class UserWhereUniqueInput {
  uid: string
}

@InputType()
export class UserWhereInputStrict
  implements RestrictProperties<UserWhereInputStrict, Prisma.UserWhereInput>
{
  admin: AdminRelationFilter
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  name: StringFilter
  image: StringFilter
  reads: ReadListRelationFilter
  feedbacks: FeedbackListRelationFilter
  reporter: ReporterRelationFilter

  AND: UserWhereInput[]
  OR: UserWhereInput[]
  NOT: UserWhereInput[]
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput
  isNot?: UserWhereInput
}
