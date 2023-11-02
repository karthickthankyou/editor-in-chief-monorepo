import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { AdminsService } from './admins.service'
import { Admin } from './entity/admin.entity'
import { FindManyAdminArgs, FindUniqueAdminArgs } from './dtos/find.args'
import { CreateAdminInput } from './dtos/create-admin.input'
import { UpdateAdminInput } from './dtos/update-admin.input'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from 'src/models/users/graphql/entity/user.entity'
import { Article } from 'src/models/articles/graphql/entity/article.entity'
import { FindManyArticleArgs } from 'src/models/articles/graphql/dtos/find.args'
import { UpdateArticleInput } from 'src/models/articles/graphql/dtos/update-article.input'

@AllowAuthenticated('admin')
@Resolver(() => Admin)
export class AdminsResolver {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Admin)
  createAdmin(@Args('createAdminInput') args: CreateAdminInput) {
    return this.adminsService.create(args)
  }

  @Query(() => [Admin], { name: 'admins' })
  findAll(@Args() args: FindManyAdminArgs) {
    return this.adminsService.findAll(args)
  }

  @Query(() => Admin, { name: 'admin' })
  findOne(@Args() args: FindUniqueAdminArgs) {
    return this.adminsService.findOne(args)
  }

  @AllowAuthenticated()
  @Query(() => Admin, { name: 'adminMe' })
  adminMe(@GetUser() user: GetUserType) {
    return this.prisma.admin.findUnique({
      where: { uid: user.uid },
    })
  }

  @Mutation(() => Admin)
  updateAdmin(@Args('updateAdminInput') args: UpdateAdminInput) {
    return this.adminsService.update(args)
  }

  @Query(() => [Article], { name: 'articlesForAdmin' })
  articlesForAdmin(@Args() args: FindManyArticleArgs) {
    return this.prisma.article.findMany(args)
  }

  //   @Mutation(() => Article)
  //   updateArticleAdmin(@Args('updateArticleInput') args: UpdateArticleInput) {
  //     const { id, ...data } = args
  //     return this.prisma.article.update({ data, where: { id } })
  //   }

  @Mutation(() => Admin)
  removeAdmin(@Args() args: FindUniqueAdminArgs) {
    return this.adminsService.remove(args)
  }

  @ResolveField(() => User)
  user(@Parent() parent: Admin) {
    return this.prisma.user.findUnique({
      where: { uid: parent.uid },
    })
  }
}
