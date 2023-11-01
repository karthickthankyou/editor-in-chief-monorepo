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
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'
import { FeedbackType } from '@prisma/client'

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

  @Query(() => Feedback, { name: 'feedback', nullable: true })
  findOne(@Args() args: FindUniqueFeedbackArgs) {
    return this.feedbacksService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Feedback, { name: 'myFeedback', nullable: true })
  myFeedback(
    @Args('articleId') articleId: number,
    @GetUser() user: GetUserType,
  ) {
    return this.feedbacksService.findOne({
      where: { uid_articleId: { articleId, uid: user.uid } },
    })
  }

  @AllowAuthenticated()
  @Mutation(() => Feedback, { name: 'giveMyFeedback' })
  giveMyFeedback(
    @Args('feedbackId', { nullable: true }) feedbackId: number,
    @Args('articleId') articleId: number,
    @Args('type') type: FeedbackType,
    @GetUser() user: GetUserType,
  ) {
    const uid = user.uid
    return this.prisma.feedback.upsert({
      create: {
        type,
        articleId,
        uid,
      },
      update: {
        type,
      },
      where: {
        id: feedbackId,
        uid_articleId: {
          articleId,
          uid,
        },
      },
    })
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
