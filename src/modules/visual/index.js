/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Engine
 *
 * Responsável por:
 * - receber a estrutura LIBRAS
 * - renderizar os sinais
 * - enviar ao Driver escolhido
 *
 * ==========================================================
 */

import { on } from "../../core/events.js";

import { renderSigns } from "./renderer.js";

import { startPlayer } from "./player.js";

import { createScene } from "./scene.js";

import {

    initializeDrivers,

    render

} from "./drivers/index.js";

import {

    createDebugPanel,

    updateDebugPanel

} from "./debugPanel.js";

import { createStage } from "./stage.js";



export function initializeVisualModule() {

    console.log(
        "👁️ Visual Engine iniciado."
    );

    /*
    ==================================================
    Inicialização
    ==================================================
    */

    createScene();

    createStage();

    createDebugPanel();

    initializeDrivers();

    startPlayer();

    /*
    ==================================================
    Recebe estrutura criada pelo Translator
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
            Renderiza sinais
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

            console.table(
                visual
            );

            /*
            ==========================================
            Envia ao Driver
            ==========================================
            */

            const renderPackage = render(
                visual
            );

            console.log(
                "🚀 Driver retornou:"
            );

            console.log(
                renderPackage
            );

            /*
            ==========================================
            Atualiza painel Debug
            ==========================================
            */

            updateDebugPanel({

                original:

                    data.original ?? "-",

                gloss:

                    visual
                        .map(sign => sign.word)
                        .join(" "),

                current:

                    visual[0]?.word ?? "-"

            });

        }

    );

}