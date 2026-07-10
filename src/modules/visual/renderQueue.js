/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Render Queue
 *
 * Responsável por organizar
 * a execução dos sinais.
 *
 * ==========================================================
 */

const queue = [];

export function enqueue(sign){

    queue.push(sign);

    console.log(
        "📥 RenderQueue:",
        sign.word
    );

}

export function dequeue(){

    return queue.shift();

}

export function hasItems(){

    return queue.length > 0;

}

export function clearQueue(){

    queue.length = 0;

}

export function size(){

    return queue.length;

}