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
import {
  CreateUserWithCredentialsInput,
  CreateUserWithProviderInput,
} from './dtos/create-user.input'
import { UpdateUserInput } from './dtos/update-user.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Reporter } from '../../reporters/graphql/entity/reporter.entity'
import { Feedback } from '../../feedbacks/graphql/entity/feedback.entity'
import { Read } from '../../reads/graphql/entity/read.entity'
import { AIService } from 'src/common/ai/ai.service'
import { Credential } from 'src/models/credentials/entity/credential.entity'
import { AuthProvider } from 'src/models/authProvider/entity/authProvider.entity'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
    private readonly ai: AIService,
  ) {}

  @Mutation(() => User)
  async createUserWithProvider(
    @Args('createUserWithProviderInput') args: CreateUserWithProviderInput,
  ) {
    try {
      const user = await this.usersService.createWithProvider(args)
      await this.ai.addUser({ uid: user.uid })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  @Mutation(() => User)
  async createUserWithCredentials(
    @Args('createUserWithCredentialsInput')
    args: CreateUserWithCredentialsInput,
  ) {
    try {
      const user = await this.usersService.createWithCredentials(args)
      await this.ai.addUser({ uid: user.uid })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  @Query(() => Credential, { name: 'getCredentials', nullable: true })
  getCredentials(@Args('email') email: string) {
    return this.prisma.credentials.findUnique({ where: { email } })
  }

  @Query(() => AuthProvider, { name: 'getAuthProvider', nullable: true })
  getAuthProvider(@Args('uid') uid: string) {
    return this.prisma.authProvider.findUnique({ where: { uid } })
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
