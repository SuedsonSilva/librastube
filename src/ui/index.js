/**
 * ==========================================================
 * LIBRASTUBE
 * UI Manager
 * ==========================================================
 */

import { createPanel } from "./panel.js";
import { injectStyles } from "./styles.js";

import { on } from "../core/events.js";

import {
  updateVideoTitle,
  updateSubtitleStatus,
  updateTranslationStatus,
} from "./status.js";

export function initializeUI() {

  injectStyles();

  createPanel();

  console.log("🎨 UI iniciada.");

  /**
   * Escuta mudanças de vídeo
   */
  on("VIDEO_CHANGED", (video) => {

    console.log("🎯 Evento recebido pela UI");

    updateVideoTitle(video.title);

    updateSubtitleStatus("Procurando...");

    updateTranslationStatus("Desligada");

  });

}