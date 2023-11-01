import { Reporter } from '@prisma/client'
import { IsDate, IsString, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ReporterEntity
  implements RestrictProperties<ReporterEntity, Reporter>
{
  @IsString()
  uid: string

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date
}
