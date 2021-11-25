import * as mongoose from 'mongoose'

export const ProdutoSchema = new mongoose.Schema({

    id: Number,
    name: String,
    cost: Number,
    gain: Number,
    value: Number,
    quant: Number
    
});