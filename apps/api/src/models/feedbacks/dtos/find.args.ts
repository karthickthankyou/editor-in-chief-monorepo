import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { FeedbackOrderByWithRelationInput } from './order-by.args'
import { FeedbackWhereInput, FeedbackWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.FeedbackScalarFieldEnum, {
  name: 'FeedbackScalarFieldEnum',
})

@ArgsType()
class FindManyFeedbackArgsStrict
  implements
    RestrictProperties<
      FindManyFeedbackArgsStrict,
      Omit<Prisma.FeedbackFindManyArgs, 'include' | 'select'>
    >
{
  where: FeedbackWhereInput
  orderBy: FeedbackOrderByWithRelationInput[]
  cursor: FeedbackWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.FeedbackScalarFieldEnum])
  distinct: Prisma.FeedbackScalarFieldEnum[]
}

@ArgsType()
export class FindManyFeedbackArgs extends PartialType(
  FindManyFeedbackArgsStrict,
) {}

@ArgsType()
export class FindUniqueFeedbackArgs {
  @Field({ nullable: true })
  where: FeedbackWhereUniqueInput
}
