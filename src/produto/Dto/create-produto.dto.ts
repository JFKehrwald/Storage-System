import { CreateProdutoInput } from '../../schema.graphql'


export class CreateProdutoDto implements CreateProdutoInput 
{
    id: number;
    name: string;
    cost: number;
    gain: number;
    value: number;
}