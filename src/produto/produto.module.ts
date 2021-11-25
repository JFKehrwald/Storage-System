import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/db.module';
import { produtoProviders } from './produto.providers';
import { ProdutoResolver } from './produto.resolver';
import { ProdutoService } from './produto.service';

@Module({
  imports: [DatabaseModule],
  providers: 
  [
    ProdutoResolver, 
    ProdutoService,
    ...produtoProviders
  ]
})
export class ProdutoModule {}
