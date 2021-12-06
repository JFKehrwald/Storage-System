import { Module } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { VendasResolver } from './vendas.resolver';

@Module({
  providers: [VendasService, VendasResolver]
})
export class VendasModule {}
