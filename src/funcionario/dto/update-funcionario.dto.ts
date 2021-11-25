import { UpdateFuncionarioInput } from "src/schema.graphql";

export class UpdateFuncionarioDto implements UpdateFuncionarioInput
{   
    id: number
    name: string;
    salary: number;
    commission: number
}