import * as mongoose from 'mongoose'

export const FuncionarioSchema = new mongoose.Schema({

    id: Number,
    name: String,
    salary: Number,
    commission: Number,
    haveCommission: Boolean  
});