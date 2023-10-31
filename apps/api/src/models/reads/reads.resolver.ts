import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ReadsService } from './reads.service'
import { Read } from './entity/read.entity'
import { FindManyReadArgs, FindUniqueReadArgs } from './dtos/find.args'
import { CreateReadInput } from './dtos/create-read.input'
import { UpdateReadInput } from './dtos/update-read.input'
import { User } from '../users/entity/user.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Article } from '../articles/entity/article.entity'

@Resolver(() => Read)
export class ReadsResolver {
  constructor(
    private readonly readsService: ReadsService,
    private readonly prisma: PrismaService,
  ) {}

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

  @ResolveField(() => User)
  user(@Parent() parent: Read) {
    return this.prisma.user.findUnique({
      where: { uid: parent.uid },
    })
  }

  @ResolveField(() => Article)
  article(@Parent() parent: Read) {
    return this.prisma.article.findUnique({
      where: { id: parent.articleId },
    })
  }
}
