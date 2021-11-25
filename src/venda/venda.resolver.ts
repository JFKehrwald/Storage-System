import 
{ 
    Resolver,
    Query,
    Mutation,
    Args,
    Int 
} from '@nestjs/graphql';
import { VendaService } from './venda.service';

@Resolver()
export class VendaResolver 
{
    constructor
    (
        private readonly vendaService: VendaService
    ){}
}
