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
 * - enviar sinais para o Avatar
 *
 * ==========================================================
 */

import { on } from "../../core/events.js";

import { renderSigns } from "./renderer.js";

import { startPlayer } from "./player.js";

import { createScene } from "./scene.js";

import { updateAvatar } from "./avatar.js";



export function initializeVisualModule() {

    console.log(
        "👁️ Visual Engine iniciado."
    );

    /*
    ==================================================
    Cria a área visual onde futuramente ficará
    o avatar e os sinais.
    ==================================================
    */

    createScene();

    /*
    ==================================================
    Inicia o Player responsável por consumir
    a fila visual.
    ==================================================
    */

    startPlayer();

    /*
    ==================================================
    Escuta quando a tradução termina.
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
            Renderer transforma a estrutura em sinais
            prontos para exibição.
            ==========================================
            */

            const visual = renderSigns(
                data.librasStructure
            );

            console.log(
                "🎥 Resultado visual:"
            );

            console.log(visual);

            /*
            ==========================================
            Envia cada sinal para o Avatar.
            Neste momento o Avatar apenas registra
            no console, mas futuramente executará
            a animação correspondente.
            ==========================================
            */

            visual.forEach(sign => {

                updateAvatar(sign);

            });

        }

    );

}