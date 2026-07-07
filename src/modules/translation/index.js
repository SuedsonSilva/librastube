/**
 * ==========================================================
 * LIBRASTUBE
 * Translation Engine
 * ==========================================================
 */

import { on, emit } from "../../core/events.js";

let translationEnabled = false;

export function initializeTranslationModule() {

    console.log("🌎 Translation Engine iniciado.");

    /*
    ==========================================
    Liga / Desliga tradução
    ==========================================
    */

    on("TRANSLATION_REQUESTED", ({ enabled }) => {

        translationEnabled = enabled;

        console.log(
            enabled
                ? "▶ Tradução ativada."
                : "⏹ Tradução desativada."
        );

        emit("TRANSLATION_STATUS_CHANGED", {
            active: translationEnabled
        });

    });

    /*
    ==========================================
    Recebe legendas do Scheduler
    ==========================================
    */

    on("TRANSLATE_SUBTITLE", (subtitle) => {

        if (!translationEnabled) return;

        console.log("🤟 Traduzindo:");

        console.log(subtitle.text);

        /*
         * Aqui futuramente entraremos com:
         *
         * IA
         * Avatar
         * Cache
         * Sincronização
         */

    });

}