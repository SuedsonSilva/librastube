/**
 * ==========================================================
 * LIBRASTUBE
 * Animation Player
 * ==========================================================
 */

import {
    hasSigns,
    dequeue
} from "./queue.js";

let playing = false;

export function startPlayer() {

    if (playing) return;

    playing = true;

    console.log("▶ Animation Player iniciado.");

    setInterval(() => {

        if (!hasSigns()) return;

        const sign = dequeue();

        console.log("🎬 Executando sinal:");

        console.log(sign);

    }, 700);

}