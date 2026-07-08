/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Engine
 *
 * Responsável por:
 * - receber a estrutura LIBRAS
 * - renderizar os sinais
 * - enviar ao Renderizador escolhido
 *
 * ==========================================================
 */

import { on } from "../../core/events.js";

import { renderSigns } from "./renderer.js";

import { startPlayer } from "./player.js";

import { createScene } from "./scene.js";

import { render } from "./adapters/index.js";

export function initializeVisualModule() {

    console.log(
        "👁️ Visual Engine iniciado."
    );

    /*
    ==================================================
    Cria painel visual
    ==================================================
    */

    createScene();

    /*
    ==================================================
    Inicia o Player
    ==================================================
    */

    startPlayer();

    /*
    ==================================================
    Escuta estrutura LIBRAS
    ==================================================
    */

    on(

        "LIBRAS_STRUCTURE_CREATED",

        (data) => {

            console.log(
                "👁️ Estrutura recebida pelo Visual Engine:"
            );

            console.log(data);

            /*
            ==========================================
            Converte estrutura em sinais
            ==========================================
            */

            const visual = renderSigns(
                data.librasStructure
            );

            if (!visual) {

                console.warn(
                    "⚠️ Renderer retornou vazio."
                );

                return;

            }

            console.log(
                "🎥 Sequência pronta para renderização:"
            );

            console.table(visual);

            /*
            ==========================================
            O Visual Engine não conhece
            Avatar nem VLibras.

            Apenas envia ao Adapter.
            ==========================================
            */

            render(visual);

        }

    );

}