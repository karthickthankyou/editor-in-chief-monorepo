import { Injectable } from '@nestjs/common'
import { FindManyFeedbackArgs, FindUniqueFeedbackArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateFeedbackInput } from './dtos/create-feedback.input'
import { UpdateFeedbackInput } from './dtos/update-feedback.input'

@Injectable()
export class FeedbacksService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFeedbackInput: CreateFeedbackInput) {
    return this.prisma.feedback.create({
      data: createFeedbackInput,
    })
  }

  findAll(args: FindManyFeedbackArgs) {
    return this.prisma.feedback.findMany(args)
  }

  findOne(args: FindUniqueFeedbackArgs) {
    return this.prisma.feedback.findUnique(args)
  }

  update(updateFeedbackInput: UpdateFeedbackInput) {
    const { id, ...data } = updateFeedbackInput
    return this.prisma.feedback.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueFeedbackArgs) {
    return this.prisma.feedback.delete(args)
  }
}
