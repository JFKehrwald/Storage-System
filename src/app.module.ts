import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { DatabaseModule } from './database/db.module';
import { ProdutoModule } from './produto/produto.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { VendasModule } from './vendas/vendas.module';

@Module({
  imports: 
  [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: 
      {
        path: join(process.cwd(), 'src/schema.graphql.ts')
      }
    }),
    MongooseModule.forRoot('mongodb://localhost/storage-system'),
    ProdutoModule,
    DatabaseModule,
    FuncionarioModule,
    VendasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
