import { Connection } from "mongoose";
import { ProdutoSchema } from './schemas/produto.schema'

export const produtoProviders = 
[
    {
        provide: 'PRODUTO_MODEL',
        useFactory: (connection: Connection) => connection.model('Produtos', ProdutoSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]