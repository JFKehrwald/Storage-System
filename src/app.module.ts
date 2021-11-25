import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { DatabaseModule } from './database/db.module';
import { ProdutoModule } from './produto/produto.module';
import { VendaModule } from './venda/venda.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

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
    VendaModule,
    FuncionarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
