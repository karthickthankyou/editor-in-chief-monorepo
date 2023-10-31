import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ReportersService } from './reporters.service'
import { Reporter } from './entity/reporter.entity'
import { FindManyReporterArgs, FindUniqueReporterArgs } from './dtos/find.args'
import { CreateReporterInput } from './dtos/create-reporter.input'
import { UpdateReporterInput } from './dtos/update-reporter.input'

@Resolver(() => Reporter)
export class ReportersResolver {
  constructor(private readonly reportersService: ReportersService) {}

  @Mutation(() => Reporter)
  createReporter(@Args('createReporterInput') args: CreateReporterInput) {
    return this.reportersService.create(args)
  }

  @Query(() => [Reporter], { name: 'reporters' })
  findAll(@Args() args: FindManyReporterArgs) {
    return this.reportersService.findAll(args)
  }

  @Query(() => Reporter, { name: 'reporter' })
  findOne(@Args() args: FindUniqueReporterArgs) {
    return this.reportersService.findOne(args)
  }

  @Mutation(() => Reporter)
  updateReporter(@Args('updateReporterInput') args: UpdateReporterInput) {
    return this.reportersService.update(args)
  }

  @Mutation(() => Reporter)
  removeReporter(@Args() args: FindUniqueReporterArgs) {
    return this.reportersService.remove(args)
  }
}
