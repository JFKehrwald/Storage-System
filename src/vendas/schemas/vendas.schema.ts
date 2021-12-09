import { Document, SchemaTypes } from 'mongoose'
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { PaymentTypeEnum } from '../../schema.graphql'

@Schema({collection: 'vendas'})
export class Vendas extends Document
{
    @Prop({unique: true, required: true})
    funcionario: string;

    @Prop({required: true})
    itens: string;

    @Prop({required: true})
    valor: number;

    @Prop({required: true})
    payment: PaymentTypeEnum
}
 
export const VendaSchema = SchemaFactory.createForClass(Vendas)