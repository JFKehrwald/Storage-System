import { Connection } from "mongoose";
import { VendaSchema } from '../vendas/schemas'

export const vendaProviders = 
[
    {
        provide: 'VENDA_MODEL',
        useFactory: (connection: Connection) => connection.model('vendas', VendaSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]