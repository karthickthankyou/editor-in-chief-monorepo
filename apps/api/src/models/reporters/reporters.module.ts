import { Module } from '@nestjs/common'
import { ReportersService } from './reporters.service'
import { ReportersResolver } from './reporters.resolver'

@Module({
  providers: [ReportersResolver, ReportersService],
  exports: [ReportersService],
})
export class ReportersModule {}
