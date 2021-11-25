import * as mongoose from 'mongoose'

export const VendaSchema = new mongoose.Schema({
    id: Number,
    vendedor: String,
    produtos: Array,
    value: Number
})