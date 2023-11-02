import { Module } from '@nestjs/common'
import { FeedbacksService } from './graphql/feedbacks.service'
import { FeedbacksResolver } from './graphql/feedbacks.resolver'
import { FeedbacksController } from './rest/feedbacks.controller'
import { AIService } from 'src/common/ai/ai.service'

@Module({
  providers: [FeedbacksResolver, FeedbacksService, AIService],
  exports: [FeedbacksService],
  controllers: [FeedbacksController],
})
export class FeedbacksModule {}
