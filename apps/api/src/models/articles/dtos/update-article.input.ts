import { CreateArticleInput } from './create-article.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { Article } from '@prisma/client'

@InputType()
export class UpdateArticleInput extends PartialType(CreateArticleInput) {
  id: Article['id']
}
