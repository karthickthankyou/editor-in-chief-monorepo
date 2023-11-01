import { ApiPropertyOptional } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { IsDate, IsString, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  @IsString()
  uid: string
  @IsDate()
  createdAt: Date
  @IsDate()
  updatedAt: Date
  @IsString()
  name: string

  @IsString()
  @ApiPropertyOptional()
  @IsOptional()
  image: string
}
