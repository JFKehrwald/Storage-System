import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Venda } from 'src/schema.graphql';
import { VendaSchema } from './schemas';
import { CreateVendaDto } from './dto/create-vendas.dto';


@Injectable()
export class VendasService 
{
    constructor
    (
        @Inject('VENDA_MODEL')
        private vendaModel: Model<Venda>
    ) {}

    async findAll()
    {
        return this.vendaModel.find().exec();
    }

    async create(createVendaDto: CreateVendaDto): Promise<Venda>
    {
        const VendaID = this.findAll();
        createVendaDto.id = (await VendaID).length + 1;
        const Created = new this.vendaModel(createVendaDto);
        return Created.save();
    }
}

