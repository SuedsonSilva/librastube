/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Stage Creator
 *
 * Responsável por criar a área onde os sinais
 * serão exibidos.
 * ==========================================================
 */

export function createStage() {

    if (document.querySelector("#librastube-stage")) {
        return;
    }

    const stage = document.createElement("div");

    stage.id = "librastube-stage";

    stage.innerHTML = `
        <div id="lt-stage-header">
            🤟 LIBRASTUBE
        </div>

        <div id="lt-stage-content">

            Aguardando sinais...

        </div>
    `;

    document.body.appendChild(stage);

    console.log("🎬 Stage criado.");

}