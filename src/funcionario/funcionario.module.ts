import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/db.module';
import { funcionarioProviders } from './funcionario.providers';
import { FuncionarioResolver } from './funcionario.resolver';
import { FuncionarioService } from './funcionario.service';

@Module({
  imports: [DatabaseModule],
  providers: 
  [
    FuncionarioResolver, 
    FuncionarioService,
    ...funcionarioProviders
  ]
})
export class FuncionarioModule {}
