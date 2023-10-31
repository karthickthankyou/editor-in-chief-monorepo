import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ReporterOrderByWithRelationInput } from './order-by.args'
import { ReporterWhereInput, ReporterWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ReporterScalarFieldEnum, {
  name: 'ReporterScalarFieldEnum',
})

@ArgsType()
class FindManyReporterArgsStrict
  implements
    RestrictProperties<
      FindManyReporterArgsStrict,
      Omit<Prisma.ReporterFindManyArgs, 'include' | 'select'>
    >
{
  where: ReporterWhereInput
  orderBy: ReporterOrderByWithRelationInput[]
  cursor: ReporterWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ReporterScalarFieldEnum])
  distinct: Prisma.ReporterScalarFieldEnum[]
}

@ArgsType()
export class FindManyReporterArgs extends PartialType(
  FindManyReporterArgsStrict,
) {}

@ArgsType()
export class FindUniqueReporterArgs {
  @Field({ nullable: true })
  where: ReporterWhereUniqueInput
}
