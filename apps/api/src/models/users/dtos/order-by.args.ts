import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { FeedbackOrderByRelationAggregateInput } from 'src/models/feedbacks/dtos/order-by.args'
import { ReadOrderByRelationAggregateInput } from 'src/models/reads/dtos/order-by.args'
import { ReporterOrderByWithRelationInput } from 'src/models/reporters/dtos/order-by.args'

@InputType()
export class UserOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      UserOrderByWithRelationInputStrict,
      Prisma.UserOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  image: Prisma.SortOrder
  reads: ReadOrderByRelationAggregateInput
  feedbacks: FeedbackOrderByRelationAggregateInput
  reporter: ReporterOrderByWithRelationInput
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder
}
