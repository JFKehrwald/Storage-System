import { Module } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { VendasResolver } from './vendas.resolver';
import { vendaProviders } from './vendas.providers';
import { DatabaseModule } from 'src/database/db.module';

@Module({
  imports: [DatabaseModule],
  providers: 
  [
    VendasService, 
    VendasResolver,
    ...vendaProviders,

  ]
})
export class VendasModule {}
