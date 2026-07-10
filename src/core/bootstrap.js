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

import {createHUD } from "../modules/ui/hud.js";

function initializeModules() {

  initializeUI();

  initializeYouTubeProvider();
 
  initializeVisualModule();
  
  createHUD();
  
  initializeTranslationModule();
  
  initializeSubtitleModule();
  

}

export function bootstrap() {

  console.log("🚀 Bootstrap iniciado.");

  initializeModules();

}