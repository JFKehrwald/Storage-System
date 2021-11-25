import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Funcionario } from 'src/schema.graphql';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService 
{
    constructor
    (
        @Inject('FUNCIONARIO_MODEL')
        private funcionarioModel: Model<Funcionario>
    ){}

    async getAll()
    {
        return this.funcionarioModel.find().exec()
    }

    async getOne(id: number): Promise<Funcionario>
    {
        return this.funcionarioModel.findOne({id: id})
    }

    async getOneByName(name: string): Promise<Funcionario>
    {
        return this.funcionarioModel.findOne({name: name})
    }

    async create(createFucnionarioDto: CreateFuncionarioDto): Promise<Funcionario>
    {
        const createId = this.getAll()
        createFucnionarioDto.id = (await createId).length + 1;
        const created = new this.funcionarioModel(createFucnionarioDto)
        return created.save()
    }

    async update(updatefuncionarioDto: UpdateFuncionarioDto): Promise<Funcionario>
    {
        return this.funcionarioModel.findOneAndUpdate({id: updatefuncionarioDto.id}, updatefuncionarioDto)
    }
}
