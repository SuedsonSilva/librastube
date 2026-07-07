/**
 * ==========================================================
 * LIBRASTUBE
 * Subtitle Scheduler
 * ==========================================================
 *
 * Responsável por consumir continuamente a fila
 * de legendas.
 */

import { hasSubtitle, getNextSubtitle } from "./queue.js";
import { emit } from "../../core/events.js";

let running = false;

export function startScheduler() {

    if (running) return;

    running = true;

    console.log("🧠 Scheduler iniciado.");

    setInterval(() => {

        if (!hasSubtitle()) return;

        const subtitle = getNextSubtitle();

        console.log("🚀 Enviando legenda para tradução:");

        console.log(subtitle);

        emit(
            "TRANSLATE_SUBTITLE",
            subtitle
        );

    }, 300);

}