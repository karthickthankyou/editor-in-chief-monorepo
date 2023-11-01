import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { Prisma } from '@prisma/client'

export class ArticleQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.ArticleScalarFieldEnum))
  sortBy?: string
}
