import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { FeedbacksService } from './feedbacks.service'
import { Feedback } from './entity/feedback.entity'
import { FindManyFeedbackArgs, FindUniqueFeedbackArgs } from './dtos/find.args'
import { CreateFeedbackInput } from './dtos/create-feedback.input'
import { UpdateFeedbackInput } from './dtos/update-feedback.input'

@Resolver(() => Feedback)
export class FeedbacksResolver {
  constructor(private readonly feedbacksService: FeedbacksService) {}

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
}
