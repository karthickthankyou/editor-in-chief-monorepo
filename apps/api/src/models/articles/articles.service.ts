import { Injectable } from '@nestjs/common'
import { FindManyArticleArgs, FindUniqueArticleArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateArticleInput } from './dtos/create-article.input'
import { UpdateArticleInput } from './dtos/update-article.input'

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createArticleInput: CreateArticleInput) {
    return this.prisma.article.create({
      data: createArticleInput,
    })
  }

  findAll(args: FindManyArticleArgs) {
    return this.prisma.article.findMany(args)
  }

  findOne(args: FindUniqueArticleArgs) {
    return this.prisma.article.findUnique(args)
  }

  update(updateArticleInput: UpdateArticleInput) {
    const { id, ...data } = updateArticleInput
    return this.prisma.article.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueArticleArgs) {
    return this.prisma.article.delete(args)
  }
}
