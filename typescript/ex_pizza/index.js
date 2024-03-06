"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ARQUIVO PARA ENTANCIAR
var TamanhoPizza_1 = require("./TamanhoPizza");
var Pizza_1 = require("./Pizza");
var saborPizza_1 = require("./saborPizza");
var pedido1 = new Pizza_1.Pizza(saborPizza_1.SaborPizza.VEGETARIANA, TamanhoPizza_1.TamanhoPizza.Tamanho1, 80);
var pedido2 = new Pizza_1.Pizza(saborPizza_1.SaborPizza.CALABRESA, TamanhoPizza_1.TamanhoPizza.Tamanho2, 60);
var pedido3 = new Pizza_1.Pizza(saborPizza_1.SaborPizza.PORTUGUESA, TamanhoPizza_1.TamanhoPizza.Tamanho3, 40);
pedido1.descricao();
pedido2.descricao();
pedido3.descricao();
