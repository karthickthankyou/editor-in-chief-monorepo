import { Injectable } from '@nestjs/common'
import { FindManyReporterArgs, FindUniqueReporterArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateReporterInput } from './dtos/create-reporter.input'
import { UpdateReporterInput } from './dtos/update-reporter.input'

@Injectable()
export class ReportersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReporterInput: CreateReporterInput) {
    return this.prisma.reporter.create({
      data: createReporterInput,
    })
  }

  findAll(args: FindManyReporterArgs) {
    return this.prisma.reporter.findMany(args)
  }

  findOne(args: FindUniqueReporterArgs) {
    return this.prisma.reporter.findUnique(args)
  }

  update(updateReporterInput: UpdateReporterInput) {
    const { uid, ...data } = updateReporterInput
    return this.prisma.reporter.update({
      where: { uid },
      data: data,
    })
  }

  remove(args: FindUniqueReporterArgs) {
    return this.prisma.reporter.delete(args)
  }
}
