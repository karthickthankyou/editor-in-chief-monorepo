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
import { CreateReporter } from './dtos/create.dto'
import { ReporterQueryDto } from './dtos/query.dto'
import { UpdateReporter } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ReporterEntity } from './entity/reporter.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('reporters')
@Controller('reporters')
export class ReportersController {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new reporter
   */
  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReporterEntity })
  @Post()
  create(@Body() createReporterDto: CreateReporter) {
    return this.prisma.reporter.create({ data: createReporterDto })
  }

  /**
   * Retrieve a list of reporters
   */
  @ApiOkResponse({ type: [ReporterEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ReporterQueryDto) {
    return this.prisma.reporter.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  /**
   * Retrieve a specific reporter by its id
   */
  @ApiOkResponse({ type: ReporterEntity })
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.prisma.reporter.findUnique({ where: { uid } })
  }

  @ApiOkResponse({ type: ReporterEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':uid')
  update(
    @Param('uid') uid: string,
    @Body() updateReporterDto: UpdateReporter,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.reporter.update({
      where: { uid },
      data: updateReporterDto,
    })
  }

  /**
   * Delete a reporter
   */
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':uid')
  remove(@Param('uid') uid: string) {
    return this.prisma.reporter.delete({ where: { uid } })
  }
}
