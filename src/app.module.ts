import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Models, DatabaseModule } from './database';
import { GraphQLModule } from '@nestjs/graphql';
import { PessoaResolver } from './graphql/resolver/pessoa.resolver';
import { PessoaRepository } from './repository/pessoa.repository';

@Module({
  imports: [
    DatabaseModule(),
    Models(),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    PessoaResolver],
})
export class AppModule {}
