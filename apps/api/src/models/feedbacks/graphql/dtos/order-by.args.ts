import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ArticleOrderByWithRelationInput } from 'src/models/articles/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class FeedbackOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      FeedbackOrderByWithRelationInputStrict,
      Prisma.FeedbackOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  articleId: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  type: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  article: ArticleOrderByWithRelationInput
}

@InputType()
export class FeedbackOrderByWithRelationInput extends PartialType(
  FeedbackOrderByWithRelationInputStrict,
) {}

@InputType()
export class FeedbackOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
