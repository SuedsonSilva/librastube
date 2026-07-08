/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Adapter
 *
 * Responsável por escolher qual
 * renderizador será utilizado.
 *
 * ==========================================================
 */

import { playSigns as avatarPlayer } from "./avatarAdapter.js";

// Futuramente:
//
// import { playSigns as vlibrasPlayer }
// from "./vlibrasAdapter.js";

const ACTIVE_RENDERER = "avatar";

export function render(signs) {

    switch (ACTIVE_RENDERER) {

        case "avatar":

            avatarPlayer(signs);

            break;

        case "vlibras":

            // vlibrasPlayer(signs);

            console.warn(
                "⚠️ VLibras ainda não implementado."
            );

            break;

        default:

            console.warn(
                "⚠️ Nenhum renderizador configurado."
            );

    }

}