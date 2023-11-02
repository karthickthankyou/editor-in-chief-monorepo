import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ArticlesService } from './articles.service'
import { Article, ArticleWithScore } from './entity/article.entity'
import { FindManyArticleArgs, FindUniqueArticleArgs } from './dtos/find.args'
import { CreateArticleInput } from './dtos/create-article.input'
import { UpdateArticleInput } from './dtos/update-article.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Reporter } from '../../reporters/graphql/entity/reporter.entity'
import { Feedback } from '../../feedbacks/graphql/entity/feedback.entity'
import { Read } from '../../reads/graphql/entity/read.entity'
import { AIService } from 'src/common/ai/ai.service'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'
import { checkRowLevelPermission } from 'src/common/util'

@Resolver(() => Article)
export class ArticlesResolver {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly prisma: PrismaService,
    private readonly ai: AIService,
  ) {}

  @Mutation(() => Article)
  async createArticle(@Args('createArticleInput') args: CreateArticleInput) {
    const article = await this.articlesService.create(args)
    const articleForAi = await this.ai.addRecord(article)
    return article
  }

  @Query(() => String, { name: 'questionArticles' })
  question(@Args('query') query: string) {
    return this.ai.question(query)
  }

  @AllowAuthenticated()
  @Query(() => [Article], { name: 'articles' })
  findAll(@Args() args: FindManyArticleArgs) {
    return this.articlesService.findAll({
      ...args,
      where: { ...args.where, published: { equals: true } },
    })
  }

  @AllowAuthenticated()
  @Query(() => [Article], { name: 'myArticles' })
  myArticles(@Args() args: FindManyArticleArgs, @GetUser() user: GetUserType) {
    return this.articlesService.findAll({
      ...args,
      where: { ...args.where, reporterUid: { equals: user.uid } },
    })
  }

  @AllowAuthenticated()
  @Query(() => [ArticleWithScore], { name: 'relatedArticles' })
  async relatedArticles(@GetUser() user: GetUserType) {
    const related = await this.ai.queryRelatedArticles({ uid: user.uid })

    const articles = await this.prisma.article.findMany({
      where: {
        id: {
          in: related.map(({ id }) => +id),
        },
      },
    })

    const articlesWithScores = related.map(({ id, score }) => {
      const article = articles.find((article) => article.id === +id)
      return { score, article }
    })

    return articlesWithScores
  }

  @Query(() => Article, { name: 'article' })
  findOne(@Args() args: FindUniqueArticleArgs) {
    return this.articlesService.findOne(args)
  }

  @AllowAuthenticated('admin', 'reporter')
  @Mutation(() => Article)
  async updateArticle(
    @Args('updateArticleInput') args: UpdateArticleInput,
    @GetUser() user: GetUserType,
  ) {
    const article = await this.prisma.article.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, article.reporterUid)
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
