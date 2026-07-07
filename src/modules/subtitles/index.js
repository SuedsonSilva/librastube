/**
 * ==========================================================
 * LIBRASTUBE
 * Subtitle Module
 *
 * Responsável por iniciar o sistema de legendas.
 * ==========================================================
 */

import { startSubtitleObserver } from "./observer.js";

export function initializeSubtitleModule() {

    console.log("📝 Subtitle Module iniciado.");

    startSubtitleObserver();

}