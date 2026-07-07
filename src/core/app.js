/**
 * ==========================================================
 * LIBRASTUBE
 * App
 *
 * Ponto de entrada da aplicação.
 * ==========================================================
 */

import { bootstrap } from "./bootstrap.js";

export function startApp() {

  console.clear();

  console.log("======================================");
  console.log("🤟 LIBRASTUBE");
  console.log("Inicializando aplicação...");
  console.log("======================================");

  bootstrap();

}