/**
 * ==========================================================
 * LIBRASTUBE
 * Subtitle Queue
 * ==========================================================
 *
 * Armazena as legendas recebidas pelo Observer.
 */

const queue = [];

export function addSubtitle(subtitle) {

    queue.push(subtitle);

    console.log("📥 Legenda adicionada à fila.");

    console.table(queue);

}

export function getNextSubtitle() {

    if (queue.length === 0) {

        return null;

    }

    return queue.shift();

}

export function hasSubtitle() {

    return queue.length > 0;

}

export function clearQueue() {

    queue.length = 0;

    console.log("🗑️ Fila limpa.");

}