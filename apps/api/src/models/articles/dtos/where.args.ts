import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { FeedbackListRelationFilter } from 'src/models/feedbacks/dtos/where.args'
import { ReadListRelationFilter } from 'src/models/reads/dtos/where.args'
import { ReporterRelationFilter } from 'src/models/reporters/dtos/where.args'

@InputType()
export class ArticleWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ArticleWhereInputStrict
  implements
    RestrictProperties<ArticleWhereInputStrict, Prisma.ArticleWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  title: StringFilter
  body: StringFilter
  published: BoolFilter
  tags: StringListFilter
  reporterUid: StringFilter
  reads: ReadListRelationFilter
  feedbacks: FeedbackListRelationFilter
  reporter: ReporterRelationFilter

  AND: ArticleWhereInput[]
  OR: ArticleWhereInput[]
  NOT: ArticleWhereInput[]
}

@InputType()
export class ArticleWhereInput extends PartialType(ArticleWhereInputStrict) {}

@InputType()
export class ArticleListRelationFilter {
  every?: ArticleWhereInput
  some?: ArticleWhereInput
  none?: ArticleWhereInput
}

@InputType()
export class ArticleRelationFilter {
  is?: ArticleWhereInput
  isNot?: ArticleWhereInput
}
