import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ArticlesService } from './articles.service'
import { Article } from './entity/article.entity'
import { FindManyArticleArgs, FindUniqueArticleArgs } from './dtos/find.args'
import { CreateArticleInput } from './dtos/create-article.input'
import { UpdateArticleInput } from './dtos/update-article.input'

@Resolver(() => Article)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

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
}
