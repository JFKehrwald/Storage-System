import { Module } from '@nestjs/common';
import { VendaResolver } from './venda.resolver';
import { VendaService } from './venda.service';
import { DatabaseModule } from 'src/database/db.module'
import { vendaProviders } from './venda.providers';

@Module({
  imports: [DatabaseModule],
  providers:
  [
    VendaResolver,
    VendaService,
    ...vendaProviders
  ]
})
export class VendaModule {}
