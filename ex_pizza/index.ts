//ARQUIVO PARA ENTANCIAR
import { TamanhoPizza } from "./TamanhoPizza";
import { Pizza } from "./Pizza";
import { SaborPizza } from "./saborPizza";

const pedido1: Pizza = new Pizza(SaborPizza.VEGETARIANA, TamanhoPizza.Tamanho1, 80)
const pedido2: Pizza = new Pizza(SaborPizza.CALABRESA, TamanhoPizza.Tamanho2, 60)
const pedido3: Pizza = new Pizza(SaborPizza.PORTUGUESA, TamanhoPizza.Tamanho3, 40)

pedido1.descricao()
pedido2.descricao()
pedido3.descricao()
