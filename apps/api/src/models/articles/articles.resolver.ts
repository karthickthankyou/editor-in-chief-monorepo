import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ArticlesService } from './articles.service'
import { Article } from './entity/article.entity'
import { FindManyArticleArgs, FindUniqueArticleArgs } from './dtos/find.args'
import { CreateArticleInput } from './dtos/create-article.input'
import { UpdateArticleInput } from './dtos/update-article.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Reporter } from '../reporters/entity/reporter.entity'
import { Feedback } from '../feedbacks/entity/feedback.entity'
import { Read } from '../reads/entity/read.entity'

@Resolver(() => Article)
export class ArticlesResolver {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Article)
  createArticle(@Args('createArticleInput') args: CreateArticleInput) {
    return this.articlesService.create(args)
  }

  @Query(() => [Article], { name: 'articles' })
  findAll(@Args() args: FindManyArticleArgs) {
    return this.articlesService.findAll(args)
  }

  @Query(() => Article, { name: 'article' })
  findOne(@Args() args: FindUniqueArticleArgs) {
    return this.articlesService.findOne(args)
  }

  @Mutation(() => Article)
  updateArticle(@Args('updateArticleInput') args: UpdateArticleInput) {
    return this.articlesService.update(args)
  }

  @Mutation(() => Article)
  removeArticle(@Args() args: FindUniqueArticleArgs) {
    return this.articlesService.remove(args)
  }

  @ResolveField(() => Reporter, { nullable: true })
  reporter(@Parent() parent: Article) {
    return this.prisma.reporter.findUnique({
      where: { uid: parent.reporterUid },
    })
  }

  @ResolveField(() => [Feedback])
  feedbacks(@Parent() parent: Article) {
    return this.prisma.feedback.findMany({
      where: { articleId: parent.id },
    })
  }

  @ResolveField(() => [Read])
  reads(@Parent() parent: Article) {
    return this.prisma.read.findMany({
      where: { articleId: parent.id },
    })
  }
}
