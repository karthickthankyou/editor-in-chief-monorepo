import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ArticleOrderByWithRelationInput } from 'src/models/articles/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class ReadOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ReadOrderByWithRelationInputStrict,
      Prisma.ReadOrderByWithRelationInput
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
  count: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  article: ArticleOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ReadOrderByWithRelationInput extends PartialType(
  ReadOrderByWithRelationInputStrict,
) {}

@InputType()
export class ReadOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
