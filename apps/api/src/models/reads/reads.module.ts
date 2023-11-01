import { Module } from '@nestjs/common'
import { ReadsService } from './graphql/reads.service'
import { ReadsResolver } from './graphql/reads.resolver'
import { ReadsController } from './rest/reads.controller'

@Module({
  providers: [ReadsResolver, ReadsService],
  exports: [ReadsService],
  controllers: [ReadsController],
})
export class ReadsModule {}
