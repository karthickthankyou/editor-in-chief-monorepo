import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateRead } from './dtos/create.dto'
import { ReadQueryDto } from './dtos/query.dto'
import { UpdateRead } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ReadEntity } from './entity/read.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('reads')
@Controller('reads')
export class ReadsController {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new read
   */
  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReadEntity })
  @Post()
  create(@Body() createReadDto: CreateRead) {
    return this.prisma.read.create({ data: createReadDto })
  }

  /**
   * Retrieve a list of reads
   */
  @ApiOkResponse({ type: [ReadEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ReadQueryDto) {
    return this.prisma.read.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  /**
   * Retrieve a specific read by its id
   */
  @ApiOkResponse({ type: ReadEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.read.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ReadEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateReadDto: UpdateRead,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.read.update({
      where: { id },
      data: updateReadDto,
    })
  }

  /**
   * Delete a read
   */
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.read.delete({ where: { id } })
  }
}
