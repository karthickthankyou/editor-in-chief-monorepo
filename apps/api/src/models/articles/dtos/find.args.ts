import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ArticleOrderByWithRelationInput } from './order-by.args'
import { ArticleWhereInput, ArticleWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.ArticleScalarFieldEnum, {
  name: 'ArticleScalarFieldEnum',
})

@ArgsType()
class FindManyArticleArgsStrict
  implements
    RestrictProperties<
      FindManyArticleArgsStrict,
      Omit<Prisma.ArticleFindManyArgs, 'include' | 'select'>
    >
{
  where: ArticleWhereInput
  orderBy: ArticleOrderByWithRelationInput[]
  cursor: ArticleWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ArticleScalarFieldEnum])
  distinct: Prisma.ArticleScalarFieldEnum[]
}

@ArgsType()
export class FindManyArticleArgs extends PartialType(
  FindManyArticleArgsStrict,
) {}

@ArgsType()
export class FindUniqueArticleArgs {
  @Field({ nullable: true })
  where: ArticleWhereUniqueInput
}
