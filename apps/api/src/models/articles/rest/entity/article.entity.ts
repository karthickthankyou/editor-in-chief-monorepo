import { Article } from '@prisma/client'
import { IsDate, IsString, IsInt, IsBoolean, IsArray } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ArticleEntity
  implements RestrictProperties<ArticleEntity, Article>
{
  @IsInt()
  id: number

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsString()
  title: string

  @IsString()
  body: string

  @IsBoolean()
  published: boolean

  @IsArray()
  @IsString({ each: true })
  tags: string[]

  @IsString()
  reporterUid: string
}
