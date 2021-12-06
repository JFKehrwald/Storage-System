import { CreateVendaInput, PaymentTypeEnum } from "src/schema.graphql";

export class CreateVendaDto implements CreateVendaInput
{
    funcionario: string;
    itens: string;
    valor: number;
    payment: PaymentTypeEnum
}