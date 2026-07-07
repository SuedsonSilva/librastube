/**
 * ==========================================================
 * LIBRASTUBE
 * Bootstrap
 *
 * Responsável por inicializar todos os módulos
 * ==========================================================
 */

import { initializeUI } from "../ui/index.js";
import { initializeYouTubeProvider } from "../providers/youtube/index.js";
import { initializeSubtitleModule } from "../modules/subtitles/index.js";
import { initializeTranslationModule } from "../modules/translation/index.js";

function initializeModules() {

  initializeUI();

  initializeYouTubeProvider();

  initializeSubtitleModule();

  initializeTranslationModule();

}

export function bootstrap() {

  console.log("🚀 Bootstrap iniciado.");

  initializeModules();

}