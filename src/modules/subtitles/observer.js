/**
 * ==========================================================
 * LIBRASTUBE
 * Subtitle Observer
 *
 * Observa as legendas exibidas na tela do YouTube.
 * ==========================================================
 */

import { emit } from "../../core/events.js";

let lastSubtitle = "";

export function startSubtitleObserver() {

    console.log("👀 Subtitle Observer iniciado.");

    setInterval(() => {

        /*
        ===========================================
        Procura o elemento da legenda do YouTube
        ===========================================
        */

        const subtitle = document.querySelector(

            ".ytp-caption-segment"

        );

        if (!subtitle) return;

        const text = subtitle.textContent.trim();

        if (!text) return;

        /*
        ===========================================
        Evita repetir a mesma frase
        ===========================================
        */

        if (text === lastSubtitle) return;

        lastSubtitle = text;

        console.log("📝 Nova legenda:");

        console.log(text);

        /*
        ===========================================
        Envia para o restante do sistema
        ===========================================
        */

        emit(

            "SUBTITLE_CHANGED",

            {

                text,

                timestamp: Date.now()

            }

        );

    }, 150);

}