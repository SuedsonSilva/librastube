/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Bridge
 *
 * Faz a ponte entre Drivers
 * e o mecanismo de renderização.
 *
 * ==========================================================
 */

import { renderSequence } from "./vlibrasBridge.js";

export function sendToBridge(renderPackage) {

    console.log(
        "🌉 Bridge recebeu Render Package."
    );

    console.log(renderPackage);

    renderSequence(
        renderPackage
    );

}