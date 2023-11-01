import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { FeedbacksService } from './feedbacks.service'
import { Feedback } from './entity/feedback.entity'
import { FindManyFeedbackArgs, FindUniqueFeedbackArgs } from './dtos/find.args'
import { CreateFeedbackInput } from './dtos/create-feedback.input'
import { UpdateFeedbackInput } from './dtos/update-feedback.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../../users/graphql/entity/user.entity'
import { Article } from '../../articles/graphql/entity/article.entity'

@Resolver(() => Feedback)
export class FeedbacksResolver {
  constructor(
    private readonly feedbacksService: FeedbacksService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Feedback)
  createFeedback(@Args('createFeedbackInput') args: CreateFeedbackInput) {
    return this.feedbacksService.create(args)
  }

  @Query(() => [Feedback], { name: 'feedbacks' })
  findAll(@Args() args: FindManyFeedbackArgs) {
    return this.feedbacksService.findAll(args)
  }

  @Query(() => Feedback, { name: 'feedback' })
  findOne(@Args() args: FindUniqueFeedbackArgs) {
    return this.feedbacksService.findOne(args)
  }

  @Mutation(() => Feedback)
  updateFeedback(@Args('updateFeedbackInput') args: UpdateFeedbackInput) {
    return this.feedbacksService.update(args)
  }

  @Mutation(() => Feedback)
  removeFeedback(@Args() args: FindUniqueFeedbackArgs) {
    return this.feedbacksService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: Feedback) {
    return this.prisma.user.findUnique({
      where: { uid: parent.uid },
    })
  }

  @ResolveField(() => Article)
  article(@Parent() parent: Feedback) {
    return this.prisma.article.findUnique({
      where: { id: parent.articleId },
    })
  }
}
