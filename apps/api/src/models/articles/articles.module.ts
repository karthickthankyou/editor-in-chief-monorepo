import { Module } from '@nestjs/common'
import { ArticlesService } from './graphql/articles.service'
import { ArticlesResolver } from './graphql/articles.resolver'
import { AIModule } from 'src/common/ai/ai.module'
import { ArticlesController } from './rest/articles.controller'

@Module({
  imports: [AIModule],
  providers: [ArticlesResolver, ArticlesService],
  exports: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
