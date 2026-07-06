/**
 * ==========================================================
 * LIBRASTUBE
 * Provider: YouTube Player
 * ==========================================================
 */

export function getCurrentVideo() {
  const url = window.location.href;

  const params = new URLSearchParams(window.location.search);

  const videoId = params.get("v");

  const titleElement = document.querySelector(
    "ytd-watch-metadata h1"
  );

  const title = titleElement
    ? titleElement.textContent.trim()
    : "Título não encontrado";

  return {
    id: videoId,
    title,
    url,
  };
}