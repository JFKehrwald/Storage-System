import { EntradaProdutoInput } from "src/schema.graphql";

export class EntradaProdutoDto implements EntradaProdutoInput
{
    id: number;
    quant: number;
}