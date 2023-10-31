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
import { AIService } from 'src/common/ai/ai.service'

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
    const sdf = this.ai.addRecord(article)
    return article
  }

  @Query(() => String, { name: 'questionArticles' })
  question(@Args('query') query: string) {
    return this.ai.question(query)
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
