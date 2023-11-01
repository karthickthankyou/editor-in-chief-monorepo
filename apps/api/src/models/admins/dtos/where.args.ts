import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/dtos/where.args'

@InputType()
export class AdminWhereUniqueInput {
  uid: string
}

@InputType()
export class AdminWhereInputStrict
  implements RestrictProperties<AdminWhereInputStrict, Prisma.AdminWhereInput>
{
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter

  AND: AdminWhereInput[]
  OR: AdminWhereInput[]
  NOT: AdminWhereInput[]
}

@InputType()
export class AdminWhereInput extends PartialType(AdminWhereInputStrict) {}

@InputType()
export class AdminListRelationFilter {
  every?: AdminWhereInput
  some?: AdminWhereInput
  none?: AdminWhereInput
}

@InputType()
export class AdminRelationFilter {
  is?: AdminWhereInput
  isNot?: AdminWhereInput
}
