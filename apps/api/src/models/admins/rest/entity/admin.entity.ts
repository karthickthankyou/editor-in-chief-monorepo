import { Admin } from '@prisma/client'
import { IsDate, IsString } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AdminEntity implements RestrictProperties<AdminEntity, Admin> {
  @IsString()
  uid: string

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date
}
