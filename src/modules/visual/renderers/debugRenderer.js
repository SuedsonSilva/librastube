/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Debug Renderer
 *
 * ==========================================================
 */

import {

    updateHUD

} from "../../ui/hud.js";

export function renderWithDebug(sign){

    console.log(
        "🖥 Debug Renderer:"
    );

    console.log(sign);

    updateHUD({

        word: sign.word,

        status: "🟢 Traduzindo"

    });

}