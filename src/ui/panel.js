/**
 * ==========================================================
 * LIBRASTUBE
 * Painel Principal
 * ==========================================================
 */

export function createPanel() {

  // Evita criar dois painéis
  if (document.querySelector("#librastube-panel")) {
    return;
  }

  const panel = document.createElement("div");

  panel.id = "librastube-panel";

  panel.innerHTML = `
      <div id="librastube-header">

          🤟 LIBRASTUBE

      </div>

      <div class="item">

          <strong>Status:</strong>

          <span id="lt-status">🟢 Ativo</span>

      </div>

      <div class="item">

          <strong>Plataforma:</strong>

          <span>YouTube</span>

      </div>

      <div class="item">

          <strong>Vídeo:</strong>

          <span id="lt-video">Detectado</span>

      </div>

      <div class="item">

          <strong>Legenda:</strong>

          <span id="lt-subtitle">Procurando...</span>

      </div>

      <div class="item">

          <strong>Tradução:</strong>

          <span id="lt-translation">Desligada</span>

      </div>

      <button id="lt-button">

          Ativar Tradução

      </button>
  `;

  document.body.appendChild(panel);

}