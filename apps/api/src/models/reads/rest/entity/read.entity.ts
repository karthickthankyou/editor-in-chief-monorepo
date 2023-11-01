import { Read } from '@prisma/client'
import { IsDate, IsString, IsOptional, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ReadEntity implements RestrictProperties<ReadEntity, Read> {
  @IsInt()
  id: number

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date

  @IsString()
  uid: string

  @IsInt()
  articleId: number

  @IsInt()
  count: number
}
