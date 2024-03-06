//ARQUIVO PARA CLASSE 
import { TamanhoPizza } from "./TamanhoPizza";
import { SaborPizza } from "./saborPizza";

export class Pizza {
    sabor:SaborPizza
    tamanho:TamanhoPizza
    preco:number

    constructor(sabor: SaborPizza, tamanho:TamanhoPizza, preco:number){
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }

    descricao():void {
        console.log(`Pizza sabor: ${this.sabor}, Pizza tamnho: ${this.tamanho} e Pizza preco: ${this.preco} `)
          
    }
}

