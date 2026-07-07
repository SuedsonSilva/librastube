/**
 * ==========================================================
 * LIBRASTUBE
 * Translation Engine
 *
 * Responsável por:
 * - controlar estado da tradução
 * - receber legendas
 * - enviar para tradução futura
 *
 * ==========================================================
 */

import { translateToLibras } from "./translator.js";
import { on, emit } from "../../core/events.js";

import {
    setState,
    getState
} from "../../core/state.js";



export function initializeTranslationModule() {


    console.log(
        "🌎 Translation Engine iniciado."
    );



    /*
    ==========================================
    Liga / Desliga tradução
    ==========================================
    */


    on(
        "TRANSLATION_REQUESTED",
        ({ enabled }) => {


            console.log(
                "🔄 Atualizando estado da tradução:",
                enabled
            );



            setState({

                translationActive: enabled

            });



            console.log(
                enabled
                    ? "▶ Tradução ativada."
                    : "⏹ Tradução desativada."
            );



            emit(
                "TRANSLATION_STATUS_CHANGED",
                {
                    active: enabled
                }
            );


        }
    );




    /*
    ==========================================
    Recebe legenda do Scheduler
    ==========================================
    */


    on(
        "TRANSLATE_SUBTITLE",
        (subtitle) => {


            const state = getState();



            console.log(
                "🔥 Evento TRANSLATE_SUBTITLE recebido"
            );


            console.log(
                "🧠 Estado atual:",
                state
            );



            if(
                !state.translationActive
            ){


                console.log(
                    "⛔ Tradução desligada."
                );


                return;

            }



       console.log(
    "🤟 Traduzindo legenda:"
      );


        console.log(
            subtitle.text
        );



        const libras = translateToLibras(
            subtitle.text
        );



        console.log(
            "📦 Resultado tradução:",
            libras
        );



            /*
             *
             * PRÓXIMA FASE:
             *
             * enviar texto para IA
             * receber tradução
             * enviar para avatar Libras
             *
             */


        }
    );


}