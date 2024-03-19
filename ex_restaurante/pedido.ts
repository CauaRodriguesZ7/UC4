import { cardapioPedido } from "./cardapioPedido";
import { statusPedido } from "./statusPedido";

export class pedido {
    cardapio: cardapioPedido
    status: statusPedido

    constructor(cardapio: cardapioPedido, status:statusPedido ){
        this.cardapio = cardapio;
        this.status = status;
    }

    descricao(): void {
        console.log(`O pedido é: ${this.cardapio} e o pedido esta: ${this.status}`);
    }
}