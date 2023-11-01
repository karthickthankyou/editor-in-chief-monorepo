import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { ArticleOrderByRelationAggregateInput } from 'src/models/articles/graphql/dtos/order-by.args'
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args'

@InputType()
export class ReporterOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ReporterOrderByWithRelationInputStrict,
      Prisma.ReporterOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  user: UserOrderByWithRelationInput
  articles: ArticleOrderByRelationAggregateInput
}

@InputType()
export class ReporterOrderByWithRelationInput extends PartialType(
  ReporterOrderByWithRelationInputStrict,
) {}

@InputType()
export class ReporterOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
