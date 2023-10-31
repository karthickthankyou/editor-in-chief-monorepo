import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './models/users/users.module'
import { ReportersModule } from './models/reporters/reporters.module'
import { ArticlesModule } from './models/articles/articles.module'
import { ReadsModule } from './models/reads/reads.module'
import { FeedbacksModule } from './models/feedbacks/feedbacks.module'
import { PrismaModule } from './common/prisma/prisma.module'
import { AdminsModule } from './models/admins/admins.module'
import { AuthModule } from './common/auth/auth.module'
import { AIModule } from './common/ai/ai.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      introspection: true,
    }),
    ConfigModule.forRoot(),

    AuthModule,
    PrismaModule,
    AIModule,

    AdminsModule,
    UsersModule,
    ReportersModule,
    ArticlesModule,
    ReadsModule,
    FeedbacksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
