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
import { CreateFeedback } from './dtos/create.dto'
import { FeedbackQueryDto } from './dtos/query.dto'
import { UpdateFeedback } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { FeedbackEntity } from './entity/feedback.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('feedbacks')
@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new feedback
   */
  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: FeedbackEntity })
  @Post()
  create(@Body() createFeedbackDto: CreateFeedback) {
    return this.prisma.feedback.create({ data: createFeedbackDto })
  }

  /**
   * Retrieve a list of feedbacks
   */
  @ApiOkResponse({ type: [FeedbackEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: FeedbackQueryDto) {
    return this.prisma.feedback.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  /**
   * Retrieve a specific feedback by its id
   */
  @ApiOkResponse({ type: FeedbackEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.feedback.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: FeedbackEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateFeedbackDto: UpdateFeedback,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.feedback.update({
      where: { id },
      data: updateFeedbackDto,
    })
  }

  /**
   * Delete a feedback
   */
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.feedback.delete({ where: { id } })
  }
}
