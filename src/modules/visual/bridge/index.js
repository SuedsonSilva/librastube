/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Bridge
 *
 * Faz a ponte entre Driver e Executor.
 *
 * ==========================================================
 */

import { renderSequence } from "./vlibrasBridge.js";

export function sendToBridge(renderPackage) {

    console.log(
        "🌉 Bridge recebeu RenderPackage."
    );

    console.log(renderPackage);

    renderSequence(
        renderPackage
    );

}