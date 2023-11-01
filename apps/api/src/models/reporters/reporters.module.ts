import { Module } from '@nestjs/common'
import { ReportersService } from './graphql/reporters.service'
import { ReportersResolver } from './graphql/reporters.resolver'
import { ReportersController } from './rest/reporters.controller'

@Module({
  providers: [ReportersResolver, ReportersService],
  exports: [ReportersService],
  controllers: [ReportersController],
})
export class ReportersModule {}
