import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ReadsService } from './reads.service'
import { Read } from './entity/read.entity'
import { FindManyReadArgs, FindUniqueReadArgs } from './dtos/find.args'
import { CreateReadInput } from './dtos/create-read.input'
import { UpdateReadInput } from './dtos/update-read.input'

@Resolver(() => Read)
export class ReadsResolver {
  constructor(private readonly readsService: ReadsService) {}

  @Mutation(() => Read)
  createRead(@Args('createReadInput') args: CreateReadInput) {
    return this.readsService.create(args)
  }

  @Query(() => [Read], { name: 'reads' })
  findAll(@Args() args: FindManyReadArgs) {
    return this.readsService.findAll(args)
  }

  @Query(() => Read, { name: 'read' })
  findOne(@Args() args: FindUniqueReadArgs) {
    return this.readsService.findOne(args)
  }

  @Mutation(() => Read)
  updateRead(@Args('updateReadInput') args: UpdateReadInput) {
    return this.readsService.update(args)
  }

  @Mutation(() => Read)
  removeRead(@Args() args: FindUniqueReadArgs) {
    return this.readsService.remove(args)
  }
}
