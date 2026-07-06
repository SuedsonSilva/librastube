/**
 * ==========================================================
 * LIBRASTUBE
 * YouTube Navigation Observer
 * Detecta navegação interna do YouTube
 * ==========================================================
 */

export function observeYouTubeNavigation(callback) {

  document.addEventListener(
    "yt-navigate-finish",
    () => {

      console.log("🔄 YouTube navegou para uma nova página");

      callback();

    }
  );


  console.log("👀 YouTube Observer ativo.");
}