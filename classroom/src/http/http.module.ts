import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

import { DatabaseModule } from 'src/database/database.module';
import { TestResolver } from 'src/http/test.resolver';

@Module({
  imports: [
   ConfigModule.forRoot(),
   DatabaseModule,
   GraphQLModule.forRoot({
     driver: ApolloDriver,
     autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
   })
  ],
  providers: [TestResolver],
})
export class HttpModule {}
