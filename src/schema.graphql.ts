
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum PaymentTypeEnum {
    creditoAvista = "creditoAvista",
    creditoParcelado = "creditoParcelado",
    debito = "debito",
    dinheiro = "dinheiro",
    boletoAvista = "boletoAvista",
    boletoParcelado = "boletoParcelado"
}

export interface CreateFuncionarioInput {
    name: string;
    salary: number;
    commission: number;
}

export interface UpdateFuncionarioInput {
    id: number;
    name?: Nullable<string>;
    salary?: Nullable<number>;
    commission?: Nullable<number>;
}

export interface CreateProdutoInput {
    id: number;
    name: string;
    cost: number;
    gain: number;
}

export interface UpdateProdutoInput {
    id: number;
    name?: Nullable<string>;
    cost?: Nullable<number>;
    gain?: Nullable<number>;
}

export interface EntradaProdutoInput {
    id: number;
    quant: number;
}

export interface CreateVendaInput {
    funcionario: string;
    itens: string;
    valor: number;
    payment: PaymentTypeEnum;
}

export interface Funcionario {
    id?: Nullable<number>;
    name?: Nullable<string>;
    salary?: Nullable<number>;
    commission?: Nullable<number>;
}

export interface IQuery {
    funcionarios(): Nullable<Nullable<Funcionario>[]> | Promise<Nullable<Nullable<Funcionario>[]>>;
    funcionario(id: string): Nullable<Funcionario> | Promise<Nullable<Funcionario>>;
    produtos(): Nullable<Nullable<Produto>[]> | Promise<Nullable<Nullable<Produto>[]>>;
    produto(id: string): Nullable<Produto> | Promise<Nullable<Produto>>;
}

export interface IMutation {
    createFuncionario(createFuncionarioInput?: Nullable<CreateFuncionarioInput>): Nullable<Funcionario> | Promise<Nullable<Funcionario>>;
    updateFuncionario(updateFuncionarioInput?: Nullable<UpdateFuncionarioInput>): Nullable<Funcionario> | Promise<Nullable<Funcionario>>;
    cadProduto(createProdutoInput?: Nullable<CreateProdutoInput>): Nullable<Produto> | Promise<Nullable<Produto>>;
    update(updateProdutoInput?: Nullable<UpdateProdutoInput>): Nullable<Produto> | Promise<Nullable<Produto>>;
    Delete(id: string): Nullable<Produto> | Promise<Nullable<Produto>>;
    Entrada(entradaProdutoInput?: Nullable<EntradaProdutoInput>): Nullable<Produto> | Promise<Nullable<Produto>>;
}

export interface Produto {
    id?: Nullable<number>;
    name?: Nullable<string>;
    cost?: Nullable<number>;
    gain?: Nullable<number>;
    value?: Nullable<number>;
    quant?: Nullable<number>;
}

export interface Venda {
    id?: Nullable<number>;
    funcionario?: Nullable<string>;
    itens?: Nullable<string>;
    valor?: Nullable<number>;
    comission?: Nullable<number>;
    payment?: Nullable<PaymentTypeEnum>;
}

type Nullable<T> = T | null;
