import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Venda } from 'src/schema.graphql';
import { CreateVendaDto } from './dto/create-vendas.dto';
import { VendasService} from './vendas.service';

@Resolver()
export class VendasResolver 
{
    constructor
    (
        private readonly vendaService: VendasService
    ){}
    
    @Query('vendas')
    getAll()
    {
        return this.vendaService.findAll()
    }
    @Mutation('createVenda')
    create(@Args('createVendaInput')args: CreateVendaDto): Promise<Venda>
    {
        return this.vendaService.create(args)
    }

}
