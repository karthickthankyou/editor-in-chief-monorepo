import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AdminOrderByWithRelationInput } from 'src/models/admins/graphql/dtos/order-by.args'
import { FeedbackOrderByRelationAggregateInput } from 'src/models/feedbacks/graphql/dtos/order-by.args'
import { ReadOrderByRelationAggregateInput } from 'src/models/reads/graphql/dtos/order-by.args'
import { ReporterOrderByWithRelationInput } from 'src/models/reporters/graphql/dtos/order-by.args'

@InputType()
export class UserOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      UserOrderByWithRelationInputStrict,
      Omit<Prisma.UserOrderByWithRelationInput, 'credentials' | 'authProvider'>
    >
{
  admin: AdminOrderByWithRelationInput
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
