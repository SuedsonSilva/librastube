/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Render Engine
 *
 * ==========================================================
 */

import {

    enqueue

} from "./renderQueue.js";

import {

    setRenderer

} from "./renderers/index.js";

import {

    startRenderLoop

} from "./renderLoop.js";

export function initializeRenderEngine(){

    setRenderer(
        "debug"
    );

    startRenderLoop();

    console.log(
        "🎨 Render Engine iniciado."
    );

}

export function renderSign(sign){

    enqueue(sign);

}