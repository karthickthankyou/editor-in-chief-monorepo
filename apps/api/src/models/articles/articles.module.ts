import { Module } from '@nestjs/common'
import { ArticlesService } from './articles.service'
import { ArticlesResolver } from './articles.resolver'
import { AIModule } from 'src/common/ai/ai.module'

@Module({
  imports: [AIModule],
  providers: [ArticlesResolver, ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
