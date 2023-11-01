import { IsIn, IsOptional } from 'class-validator'
import { BaseQueryDto } from 'src/common/dtos/common.dto'
import { Prisma } from '@prisma/client'

export class FeedbackQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.FeedbackScalarFieldEnum))
  sortBy?: string
}
