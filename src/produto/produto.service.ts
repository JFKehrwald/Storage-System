import { Inject, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './Dto/create-produto.dto';
import { Produto } from 'src/schema.graphql';
import { ProdutoSchema } from './schemas/produto.schema';
import { Model } from "mongoose";
import { UpdateProdutoDto } from './Dto/update-produto.dto';
import { EntradaProdutoDto } from './Dto/entrada-produto.dto';


@Injectable()
export class ProdutoService 
{
    constructor
    (
        @Inject('PRODUTO_MODEL')
        private produtoModel: Model<Produto>
    ){}


    async findOne(id:number): Promise<Produto>
    {
        return this.produtoModel.findOne({id: id})
    }

    async findAll()
    {
        return this.produtoModel.find().exec()
    }

    async Create(args): Promise<Produto>
    {
        args.value =args.cost + args.cost*(args.gain/100)
        console.log(args)
        const Created = new this.produtoModel(args)
        return Created.save()
    }

    async Update(updateProdutoDto: UpdateProdutoDto): Promise<Produto>
    {
        return this.produtoModel.findOneAndUpdate({id: updateProdutoDto.id}, updateProdutoDto)
    }

    async Delete(id:number): Promise<Produto>
    {
        return this.produtoModel.findOneAndDelete({id:id})
    }

    async Entrada(entradaProdutoDto: EntradaProdutoDto):Promise<Produto>
    {
        const prod = this.findOne(entradaProdutoDto.id);
        const newProd = (await prod).quant + entradaProdutoDto.quant
        entradaProdutoDto.quant = newProd
        return  this.produtoModel.findOneAndUpdate({id: entradaProdutoDto.id},entradaProdutoDto)
    }
}
