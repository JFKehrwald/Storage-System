import { CreateFuncionarioInput } from "src/schema.graphql";

export class CreateFuncionarioDto implements CreateFuncionarioInput
{
    id: number;
    name: string;
    salary: number;
    commission: number;
}