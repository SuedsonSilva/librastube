/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Renderers
 *
 * ==========================================================
 */

import { renderWithDebug } from "./debugRenderer.js";

import { renderWithVLibras } from "./vlibrasRenderer.js";

let currentRenderer = "debug";

/*
==================================================
Renderer ativo
==================================================
*/

export function setRenderer(renderer){

    currentRenderer = renderer;

    console.log(
        "🎨 Renderer alterado:",
        renderer
    );

}

export function getRenderer(){

    return currentRenderer;

}

export function render(sign){

    switch(currentRenderer){

        case "debug":

            renderWithDebug(sign);

            break;

        case "vlibras":

            renderWithVLibras(sign);

            break;

        default:

            console.warn(
                "Renderer não encontrado."
            );

    }

}