import * as mongoose from 'mongoose'

export const dbProviders = 
[
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> => 
        mongoose.connect('mongodb://localhost/storage-system'),
    }
]