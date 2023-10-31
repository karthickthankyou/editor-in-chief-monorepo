import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ReadOrderByWithRelationInput } from './order-by.args'
import { ReadWhereInput, ReadWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ReadScalarFieldEnum, {
  name: 'ReadScalarFieldEnum',
})

@ArgsType()
class FindManyReadArgsStrict
  implements
    RestrictProperties<
      FindManyReadArgsStrict,
      Omit<Prisma.ReadFindManyArgs, 'include' | 'select'>
    >
{
  where: ReadWhereInput
  orderBy: ReadOrderByWithRelationInput[]
  cursor: ReadWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ReadScalarFieldEnum])
  distinct: Prisma.ReadScalarFieldEnum[]
}

@ArgsType()
export class FindManyReadArgs extends PartialType(FindManyReadArgsStrict) {}

@ArgsType()
export class FindUniqueReadArgs {
  @Field({ nullable: true })
  where: ReadWhereUniqueInput
}
