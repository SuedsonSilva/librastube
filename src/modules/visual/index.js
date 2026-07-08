/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Engine
 *
 * Responsável por:
 * - receber a tradução em LIBRAS
 * - renderizar os sinais
 * - controlar a cena
 *
 * O Avatar NÃO é chamado daqui.
 * Quem controla a reprodução é o Player.
 *
 * ==========================================================
 */

import { on } from "../../core/events.js";

import { renderSigns } from "./renderer.js";

import { startPlayer } from "./player.js";

import { createScene } from "./scene.js";

export function initializeVisualModule() {

    console.log(
        "👁️ Visual Engine iniciado."
    );

    /*
    ==================================================
    Cria a cena visual.
    ==================================================
    */

    createScene();

    /*
    ==================================================
    Inicia o Player.
    ==================================================
    */

    startPlayer();

    /*
    ==================================================
    Recebe a estrutura criada pelo Translation Engine.
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
            ==================================================
            Segurança
            ==================================================
            */

            if (!data || !Array.isArray(data.librasStructure)) {

                console.error(
                    "❌ Estrutura LIBRAS inválida:",
                    data
                );

                return;

            }

            /*
            ==================================================
            Renderer envia tudo para a fila.
            ==================================================
            */

            renderSigns(
                data.librasStructure
            );

        }

    );

}