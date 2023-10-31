import { InputType, PickType } from '@nestjs/graphql'
import { Article } from '../entity/article.entity'

@InputType()
export class CreateArticleInput extends PickType(
  Article,
  ['title', 'body', 'published', 'tags', 'reporterUid'],
  InputType,
) {}
