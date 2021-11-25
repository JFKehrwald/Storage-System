import { UpdateProdutoInput } from 'src/schema.graphql'

export class UpdateProdutoDto implements UpdateProdutoInput
{
    
    id: number;
    name: string;
    cost: number;
    gain: number;
    value: number;
    
}