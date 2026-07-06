/**
 * ==========================================================
 * LIBRASTUBE
 * Arquivo: app.js
 * ==========================================================
 */

import { initializeYouTubeProvider } from "../providers/youtube/index.js";

export function startApp() {
  console.log("🚀 LIBRASTUBE iniciado!");

  initializeYouTubeProvider();
}