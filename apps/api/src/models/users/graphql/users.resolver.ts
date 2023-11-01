import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entity/user.entity'
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args'
import { CreateUserInput } from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Reporter } from '../../reporters/graphql/entity/reporter.entity'
import { Feedback } from '../../feedbacks/graphql/entity/feedback.entity'
import { Read } from '../../reads/graphql/entity/read.entity'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') args: CreateUserInput) {
    return this.usersService.create(args)
  }

  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args)
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.usersService.findOne(args)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') args: UpdateUserInput) {
    return this.usersService.update(args)
  }

  @Mutation(() => User)
  removeUser(@Args() args: FindUniqueUserArgs) {
    return this.usersService.remove(args)
  }

  @ResolveField(() => Reporter, { nullable: true })
  reporter(@Parent() parent: User) {
    return this.prisma.reporter.findUnique({
      where: { uid: parent.uid },
    })
  }

  @ResolveField(() => [Feedback])
  feedbacks(@Parent() parent: User) {
    return this.prisma.feedback.findMany({
      where: { uid: parent.uid },
    })
  }

  @ResolveField(() => [Read])
  reads(@Parent() parent: User) {
    return this.prisma.read.findMany({
      where: { uid: parent.uid },
    })
  }
}
