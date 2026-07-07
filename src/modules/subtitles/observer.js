/**
 * ==========================================================
 * LIBRASTUBE
 * Subtitle Observer
 * ==========================================================
 */

import { emit } from "../../core/events.js";
import { addSubtitle } from "./queue.js";

let lastSubtitle = "";

export function startSubtitleObserver() {

    console.log("👀 Subtitle Observer iniciado.");

    setInterval(() => {

        const subtitle = document.querySelector(

            ".ytp-caption-segment"

        );

        if (!subtitle) return;

        const text = subtitle.textContent.trim();

        if (!text) return;

        if (text === lastSubtitle) return;

        lastSubtitle = text;

        const data = {

            text,

            timestamp: Date.now()

        };

        console.log("📝 Nova legenda:");

        console.log(text);

        addSubtitle(data);

        emit(

            "SUBTITLE_CHANGED",

            data

        );

    }, 150);

}