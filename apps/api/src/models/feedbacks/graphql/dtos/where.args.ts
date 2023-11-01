import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { ArticleRelationFilter } from 'src/models/articles/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class FeedbackWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number
}

@InputType()
export class EnumFeedbackTypeFilter {
  @Field(() => $Enums.FeedbackType)
  equals?: $Enums.FeedbackType;
  @Field(() => [$Enums.FeedbackType])
  in?: $Enums.FeedbackType[]
  @Field(() => [$Enums.FeedbackType])
  notIn?: $Enums.FeedbackType[]
  @Field(() => $Enums.FeedbackType)
  not?: $Enums.FeedbackType
}

@InputType()
export class FeedbackWhereInputStrict
  implements
    RestrictProperties<FeedbackWhereInputStrict, Prisma.FeedbackWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  uid: StringFilter
  articleId: IntFilter
  @Field(() => EnumFeedbackTypeFilter)
  type: EnumFeedbackTypeFilter
  user: UserRelationFilter
  article: ArticleRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: FeedbackWhereInput[]
  OR: FeedbackWhereInput[]
  NOT: FeedbackWhereInput[]
}

@InputType()
export class FeedbackWhereInput extends PartialType(FeedbackWhereInputStrict) {}

@InputType()
export class FeedbackListRelationFilter {
  every?: FeedbackWhereInput
  some?: FeedbackWhereInput
  none?: FeedbackWhereInput
}

@InputType()
export class FeedbackRelationFilter {
  is?: FeedbackWhereInput
  isNot?: FeedbackWhereInput
}
