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
import { initializeVisualModule } from "../modules/visual/index.js";
import { initializeStage } from "../modules/visual/stage/index.js";

function initializeModules() {

  initializeUI();

  initializeStage();
  
  initializeYouTubeProvider();

  initializeSubtitleModule();

  initializeTranslationModule();

  initializeVisualModule();

}

export function bootstrap() {

  console.log("🚀 Bootstrap iniciado.");

  initializeModules();

}