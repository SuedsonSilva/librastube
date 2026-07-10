/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Renderers
 *
 * Centraliza todos os renderizadores.
 *
 * ==========================================================
 */

import { renderWithDebug } from "./debugRenderer.js";

let currentRenderer = "debug";

export function setRenderer(renderer){

    currentRenderer = renderer;

}

export function render(sign){

    switch(currentRenderer){

        case "debug":

            renderWithDebug(sign);

            break;

        default:

            console.warn(
                "Renderer inexistente."
            );

    }

}