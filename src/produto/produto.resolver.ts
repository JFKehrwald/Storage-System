import 
{ 
    Resolver,
    Mutation,
    Query,
    Args,
    Int
} from '@nestjs/graphql';
import { Produto } from 'src/schema.graphql';
import { CreateProdutoDto } from './Dto/create-produto.dto';
import { EntradaProdutoDto } from './Dto/entrada-produto.dto';
import { UpdateProdutoDto } from './Dto/update-produto.dto';
import { ProdutoService } from './produto.service';
import { ProdutoSchema } from './schemas/produto.schema';

@Resolver()
export class ProdutoResolver 
{
    constructor
    (
        private readonly produtoService:ProdutoService
    ){}
    
    @Query('produto')
    async getOne(@Args('id', {type: ()=> Int}) id: number): Promise<Produto>
    {
        return this.produtoService.findOne(id)
    }

    @Query('produtos')
    async getAll()
    {
        return this.produtoService.findAll()
    }

    @Mutation('cadProduto')
    async create(@Args('createProdutoInput') args: CreateProdutoDto): Promise<Produto>
    {
        return this.produtoService.Create(args)
    }

    @Mutation('update')
    async update(@Args('updateProdutoInput') args: UpdateProdutoDto): Promise<Produto>
    {
        return this.produtoService.Update(args)
    }

    @Mutation('Delete')
    async Delete(@Args('id', {type: () => Int}) id: number): Promise<Produto>
    {
        return this.produtoService.Delete(id)
    }

    @Mutation('Entrada')
    async Entrada(@Args('entradaProdutoInput') args:EntradaProdutoDto): Promise<Produto>
    {
        return this.produtoService.Entrada(args)
    }
}

