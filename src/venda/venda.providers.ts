import { Connection } from "mongoose";
import { VendaSchema } from './schema/venda.schema'

export const vendaProviders = 
[
    {
        provide: 'VENDA_MODEL',
        useFactory: (connection: Connection) => connection.model('Vendas', VendaSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]