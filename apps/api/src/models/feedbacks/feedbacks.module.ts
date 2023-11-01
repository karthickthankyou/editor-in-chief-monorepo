import { Module } from '@nestjs/common'
import { FeedbacksService } from './graphql/feedbacks.service'
import { FeedbacksResolver } from './graphql/feedbacks.resolver'
import { FeedbacksController } from './rest/feedbacks.controller'

@Module({
  providers: [FeedbacksResolver, FeedbacksService],
  exports: [FeedbacksService],
  controllers: [FeedbacksController],
})
export class FeedbacksModule {}
