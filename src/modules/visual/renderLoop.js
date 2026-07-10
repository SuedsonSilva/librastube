/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Render Loop
 *
 * Consome continuamente
 * a fila de renderização.
 *
 * ==========================================================
 */

import {

    dequeue,

    hasItems

} from "./renderQueue.js";

import {

    render

} from "./renderers/index.js";

let running = false;

export function startRenderLoop(){

    if(running){

        return;

    }

    running = true;

    console.log(
        "🔁 Render Loop iniciado."
    );

    loop();

}

function loop(){

    if(hasItems()){

        const sign = dequeue();

        render(sign);

    }

    requestAnimationFrame(

        loop

    );

}