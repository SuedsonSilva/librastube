/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Render Engine
 *
 * ==========================================================
 */

import {

    render

} from "./renderers/index.js";

export function initializeRenderEngine(){

    console.log(
        "🎨 Render Engine iniciado."
    );

}

export function renderSign(sign){

    render(sign);

}