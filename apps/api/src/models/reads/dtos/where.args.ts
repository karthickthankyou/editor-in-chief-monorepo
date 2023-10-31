import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ArticleRelationFilter } from 'src/models/articles/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/dtos/where.args'

@InputType()
export class ReadWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class ReadWhereInputStrict
  implements RestrictProperties<ReadWhereInputStrict, Prisma.ReadWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  uid: StringFilter
  articleId: IntFilter
  count: IntFilter
  user: UserRelationFilter
  article: ArticleRelationFilter

  AND: ReadWhereInput[]
  OR: ReadWhereInput[]
  NOT: ReadWhereInput[]
}

@InputType()
export class ReadWhereInput extends PartialType(ReadWhereInputStrict) {}

@InputType()
export class ReadListRelationFilter {
  every?: ReadWhereInput
  some?: ReadWhereInput
  none?: ReadWhereInput
}

@InputType()
export class ReadRelationFilter {
  is?: ReadWhereInput
  isNot?: ReadWhereInput
}
