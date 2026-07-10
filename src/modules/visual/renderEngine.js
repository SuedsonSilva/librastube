/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Render Engine
 *
 * ==========================================================
 */

import {

    render,

    setRenderer

} from "./renderers/index.js";

export function initializeRenderEngine(){

    /*
    ==========================================
    Hoje usamos Debug.

    Depois será VLibras.

    Bastará trocar uma linha.
    ==========================================
    */

    setRenderer(
        "debug"
    );

    console.log(
        "🎨 Render Engine iniciado."
    );

}

export function renderSign(sign){

    render(sign);

}