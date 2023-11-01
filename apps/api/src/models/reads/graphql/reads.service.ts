import { Injectable } from '@nestjs/common'
import { FindManyReadArgs, FindUniqueReadArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateReadInput } from './dtos/create-read.input'
import { UpdateReadInput } from './dtos/update-read.input'

@Injectable()
export class ReadsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReadInput: CreateReadInput) {
    return this.prisma.read.create({
      data: createReadInput,
    })
  }

  findAll(args: FindManyReadArgs) {
    return this.prisma.read.findMany(args)
  }

  findOne(args: FindUniqueReadArgs) {
    return this.prisma.read.findUnique(args)
  }

  update(updateReadInput: UpdateReadInput) {
    const { id, ...data } = updateReadInput
    return this.prisma.read.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueReadArgs) {
    return this.prisma.read.delete(args)
  }
}
