import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { FeedbackOrderByRelationAggregateInput } from 'src/models/feedbacks/dtos/order-by.args'
import { ReadOrderByRelationAggregateInput } from 'src/models/reads/dtos/order-by.args'
import { ReporterOrderByWithRelationInput } from 'src/models/reporters/dtos/order-by.args'

@InputType()
export class ArticleOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ArticleOrderByWithRelationInputStrict,
      Prisma.ArticleOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  body: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  published: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  tags: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  reporterUid: Prisma.SortOrder
  reads: ReadOrderByRelationAggregateInput
  feedbacks: FeedbackOrderByRelationAggregateInput
  reporter: ReporterOrderByWithRelationInput
}

@InputType()
export class ArticleOrderByWithRelationInput extends PartialType(
  ArticleOrderByWithRelationInputStrict,
) {}

@InputType()
export class ArticleOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
