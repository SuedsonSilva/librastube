/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Queue
 *
 * Responsável por:
 * - armazenar sinais aguardando reprodução
 * - entregar sinais ao Player
 * - controlar estado da fila
 *
 * ==========================================================
 */


const queue = [];



/*
==================================================
Adicionar sinal na fila
==================================================
*/


export function enqueue(sign) {


    queue.push(sign);


    console.log(
        "📥 Sinal entrou na fila:"
    );


    console.log(sign);


}



/*
==================================================
Retirar próximo sinal da fila
==================================================
*/


export function dequeue() {


    if(!queue.length){


        return null;


    }


    return queue.shift();


}



/*
==================================================
Verifica se existem itens esperando
==================================================
*/


export function hasItems(){


    return queue.length > 0;


}



/*
==================================================
Alias antigo

Mantemos para não quebrar
outros módulos que ainda usam
hasSigns()

==================================================
*/


export function hasSigns(){


    return hasItems();


}



/*
==================================================
Limpa toda a fila
==================================================
*/


export function clearQueue(){


    queue.length = 0;


}



/*
==================================================
Quantidade de itens aguardando
==================================================
*/


export function getQueueSize(){


    return queue.length;


}