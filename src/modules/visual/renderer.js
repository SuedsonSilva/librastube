/**
 * ==========================================================
 * LIBRASTUBE
 * Renderer
 * ==========================================================
 */

import { enqueue } from "./queue.js";

export function renderSigns(signs) {

    console.log("🎨 Renderer recebeu:");

    console.table(signs);

    signs.forEach(sign => {

        enqueue(sign);

    });

}