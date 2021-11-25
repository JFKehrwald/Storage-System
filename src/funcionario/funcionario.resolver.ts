
import { Args, Resolver, Query, Int, Mutation } from '@nestjs/graphql';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from 'src/schema.graphql';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Resolver()
export class FuncionarioResolver
{
    constructor
    (
        private readonly funcionarioService: FuncionarioService
    ){}

    @Query('funcionarios')
    async findAll()
    {
        return this.funcionarioService.getAll()
    }

    @Query('funcionario')
    async findOne(@Args('id', {type: () => Int})id: number ): Promise<Funcionario>
    {
        return this.funcionarioService.getOne(id)
    }

    @Mutation('createFuncionario')
    async create(@Args('createFuncionarioInput') args: CreateFuncionarioDto): Promise<Funcionario>
    {
        return this.funcionarioService.create(args)
    }

    @Mutation('updateFuncionario')
    async update(@Args('updateFuncionarioInput') args: UpdateFuncionarioDto): Promise<Funcionario>
    {
        return this.funcionarioService.update(args)
    }
}
