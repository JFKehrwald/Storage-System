import { CreateVendaInput, PaymentTypeEnum } from "src/schema.graphql";

export class CreateVendaDto implements CreateVendaInput
{
    id: number;
    funcionario: string;
    itens: string;
    valor: number;
    payment: PaymentTypeEnum
}