/**
 * ==========================================================
 * LIBRASTUBE
 * Visual Queue
 * ==========================================================
 *
 * Responsável por controlar a fila de animações.
 */

const queue = [];

export function enqueue(sign) {

    queue.push(sign);

    console.log("📥 Sinal entrou na fila:");

    console.log(sign);

}

export function dequeue() {

    if (!queue.length) {

        return null;

    }

    return queue.shift();

}

export function hasSigns() {

    return queue.length > 0;

}

export function clearQueue() {

    queue.length = 0;

}

export function getQueueSize() {

    return queue.length;

}