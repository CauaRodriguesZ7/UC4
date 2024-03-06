//definição da interface Ilist, que define um contrato para operacoes comuns em uma lista 
    export interface Ilist {
        // Adicionar elementos
        add(item: any): void; // Adiciona um elemento no final da lista
        addFirst(item: any): void; //adiciona um elemento no inicio da lista
        addAt(index: number, item: any): void; //Adiciona um elemento em uma posição especifica da lista
        
        //remove elementos 
        remove(item: any): void; // remove um elemento especifico da lista
        removeFirst(): void // remove o primeiro elemento da lista
        removeLast(): void; //remove o ultimo em um posicao especifico da lista
        removeAt(index: number): void; //remove o elemento em uma posição especifico da lista

        //Acessar elementos
        get(index: number): any | null; //retorna o elemento em uma posição especifica da lista
        indexOf(item: any): number; //retorna o indice da primeira ocorrencia  de um elemento na lista
    }