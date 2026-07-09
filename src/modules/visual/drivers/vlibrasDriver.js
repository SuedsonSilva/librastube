/**
 * ==========================================================
 * LIBRASTUBE
 *
 * VLibras Driver
 *
 * ==========================================================
 */

import { buildRenderPackage } from "../renderPackage.js";

import { sendToBridge } from "../bridge/index.js";

export function renderWithVLibras(signs = []) {

    console.log(
        "🤟 VLibras Driver recebeu sinais."
    );

    console.table(signs);

    const renderPackage = buildRenderPackage(
        signs
    );

    console.log(
        "📦 Render Package:"
    );

    console.log(renderPackage);

    /*
    ==================================================
    Envia para a Bridge
    ==================================================
    */

    sendToBridge(
        renderPackage
    );

    return renderPackage;

}