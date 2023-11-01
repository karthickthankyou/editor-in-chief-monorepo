import { OmitType } from '@nestjs/swagger'
import { ArticleEntity } from '../entity/article.entity'

export class CreateArticle extends OmitType(ArticleEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
