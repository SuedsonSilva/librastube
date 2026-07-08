/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Engine
 *
 * Responsável pela saída visual
 * da tradução LIBRAS.
 *
 * ==========================================================
 */

import { on } from "../../core/events.js";
import { renderSigns } from "./renderer.js";
import { startPlayer } from "./player.js";

export function initializeVisualModule() {

    console.log("👁️ Visual Engine iniciado.");

    /*
    ==========================================
    Inicia o Player de animações
    ==========================================
    */

    startPlayer();

    /*
    ==========================================
    Recebe estrutura LIBRAS pronta
    ==========================================
    */

    on(
        "LIBRAS_STRUCTURE_CREATED",
        (data) => {

            console.log(
                "👁️ Estrutura recebida pelo Visual Engine:"
            );

            console.log(data);

            renderSigns(
                data.librasStructure
            );

            console.log(
                "🎨 Estrutura enviada para o Renderer."
            );

        }
    );

}