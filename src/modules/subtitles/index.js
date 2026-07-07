/**
 * ==========================================================
 * LIBRASTUBE
 * Subtitle Module
 * ==========================================================
 */

import { startSubtitleObserver } from "./observer.js";
import { startScheduler } from "./scheduler.js";

export function initializeSubtitleModule() {

    console.log("📝 Subtitle Module iniciado.");

    startSubtitleObserver();

    startScheduler();

}