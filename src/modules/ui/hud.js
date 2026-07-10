/**
 * ==========================================================
 * LIBRASTUBE
 *
 * HUD
 *
 * Interface principal do usuário.
 *
 * ==========================================================
 */

import "./hud.css";

let hud;

export function createHUD() {

    if (document.querySelector("#librastube-hud")) {

        hud = document.querySelector("#librastube-hud");

        return;

    }

    hud = document.createElement("div");

    hud.id = "librastube-hud";

    hud.innerHTML = `

        <div id="librastube-avatar">

            🤟

        </div>

        <div id="lt-word">

            --

        </div>

        <hr>

        <div id="lt-original">

            Original: -

        </div>

        <div id="lt-gloss">

            Gloss: -

        </div>

        <div id="lt-status">

            🟢 Pronto

        </div>

        <div id="lt-footer">

            LibrasTube Beta

        </div>

    `;

    document.body.appendChild(hud);

}

export function updateHUD(data = {}) {

    const word =
        document.querySelector("#lt-word");

    const original =
        document.querySelector("#lt-original");

    const gloss =
        document.querySelector("#lt-gloss");

    const status =
        document.querySelector("#lt-status");

    if(word){

        word.textContent =
            data.word ?? "--";

    }

    if(original){

        original.textContent =
            "Original: " + (data.original ?? "-");

    }

    if(gloss){

        gloss.textContent =
            "Gloss: " + (data.gloss ?? "-");

    }

    if(status){

        status.textContent =
            data.status ?? "🟢";

    }

}