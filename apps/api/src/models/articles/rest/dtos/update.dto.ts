import { PartialType } from '@nestjs/swagger'
import { CreateArticle } from './create.dto'
import { Article } from '@prisma/client'

export class UpdateArticle extends PartialType(CreateArticle) {
  id: Article['id']
}
