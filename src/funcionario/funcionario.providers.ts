import { Connection } from "mongoose";
import {FuncionarioSchema} from 'src/funcionario/schema/funcionario.schema'

export const funcionarioProviders = 
[
    {
        provide: 'FUNCIONARIO_MODEL',
        useFactory: (connection: Connection) => connection.model('Funcionarios', FuncionarioSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]