import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ReportersService } from './reporters.service'
import { Reporter } from './entity/reporter.entity'
import { FindManyReporterArgs, FindUniqueReporterArgs } from './dtos/find.args'
import { CreateReporterInput } from './dtos/create-reporter.input'
import { UpdateReporterInput } from './dtos/update-reporter.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../../users/graphql/entity/user.entity'
import { Article } from '../../articles/graphql/entity/article.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@Resolver(() => Reporter)
export class ReportersResolver {
  constructor(
    private readonly reportersService: ReportersService,
    private readonly prisma: PrismaService,
  ) {}

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

  @AllowAuthenticated()
  @Query(() => Reporter, { name: 'reporterMe' })
  reporterMe(@GetUser() user: GetUserType) {
    return this.prisma.reporter.findUnique({
      where: { uid: user.uid },
    })
  }

  @Mutation(() => Reporter)
  updateReporter(@Args('updateReporterInput') args: UpdateReporterInput) {
    return this.reportersService.update(args)
  }

  @Mutation(() => Reporter)
  removeReporter(@Args() args: FindUniqueReporterArgs) {
    return this.reportersService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: Reporter) {
    return this.prisma.user.findUnique({
      where: { uid: parent.uid },
    })
  }

  @ResolveField(() => [Article])
  articles(@Parent() parent: User) {
    return this.prisma.article.findMany({
      where: { reporterUid: parent.uid },
    })
  }
}
