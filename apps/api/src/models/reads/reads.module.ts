import { Module } from '@nestjs/common'
import { ReadsService } from './reads.service'
import { ReadsResolver } from './reads.resolver'

@Module({
  providers: [ReadsResolver, ReadsService],
  exports: [ReadsService],
})
export class ReadsModule {}
