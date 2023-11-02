import { Module } from '@nestjs/common'
import { UsersService } from './graphql/users.service'
import { UsersResolver } from './graphql/users.resolver'
import { UsersController } from './rest/users.controller'
import { AIService } from 'src/common/ai/ai.service'

@Module({
  providers: [UsersResolver, UsersService, AIService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
