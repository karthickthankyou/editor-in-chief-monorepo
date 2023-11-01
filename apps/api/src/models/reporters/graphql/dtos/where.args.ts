import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ArticleListRelationFilter } from 'src/models/articles/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class ReporterWhereUniqueInput {
  uid: string
}

@InputType()
export class ReporterWhereInputStrict
  implements
    RestrictProperties<ReporterWhereInputStrict, Prisma.ReporterWhereInput>
{
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  user: UserRelationFilter
  articles: ArticleListRelationFilter

  AND: ReporterWhereInput[]
  OR: ReporterWhereInput[]
  NOT: ReporterWhereInput[]
}

@InputType()
export class ReporterWhereInput extends PartialType(ReporterWhereInputStrict) {}

@InputType()
export class ReporterListRelationFilter {
  every?: ReporterWhereInput
  some?: ReporterWhereInput
  none?: ReporterWhereInput
}

@InputType()
export class ReporterRelationFilter {
  is?: ReporterWhereInput
  isNot?: ReporterWhereInput
}
