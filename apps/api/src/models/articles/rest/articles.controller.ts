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
import { CreateArticle } from './dtos/create.dto'
import { ArticleQueryDto } from './dtos/query.dto'
import { UpdateArticle } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ArticleEntity } from './entity/article.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create a new article
   */
  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ArticleEntity })
  @Post()
  create(@Body() createArticleDto: CreateArticle) {
    return this.prisma.article.create({ data: createArticleDto })
  }

  /**
   * Retrieve a list of articles
   */
  @ApiOkResponse({ type: [ArticleEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ArticleQueryDto) {
    return this.prisma.article.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  /**
   * Retrieve a specific article by its id
   */
  @ApiOkResponse({ type: ArticleEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.article.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ArticleEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateArticleDto: UpdateArticle,
    @GetUser() user: GetUserType,
  ) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    })
  }

  /**
   * Delete a article
   */
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.prisma.article.delete({ where: { id } })
  }
}
