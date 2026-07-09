/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Debug Panel
 *
 * ==========================================================
 */

let panel;

export function createDebugPanel() {

    if (document.querySelector("#librastube-debug")) {

        panel = document.querySelector("#librastube-debug");

        return;

    }

    panel = document.createElement("div");

    panel.id = "librastube-debug";

    panel.innerHTML = `

        <h3>🤟 LibrasTube</h3>

        <div id="lt-original">
            Original:
        </div>

        <div id="lt-gloss">
            Gloss:
        </div>

        <div id="lt-current">
            Atual:
            <strong id="librastube-debug-current">-</strong>
        </div>

    `;

    Object.assign(panel.style, {

        position: "fixed",

        right: "20px",

        top: "100px",

        width: "320px",

        background: "#111",

        color: "#fff",

        zIndex: 999999,

        padding: "15px",

        borderRadius: "10px",

        fontSize: "14px",

        fontFamily: "Arial",

        lineHeight: "1.7"

    });

    document.body.appendChild(panel);

}

export function updateDebugPanel(data) {

    const original =
        document.querySelector("#lt-original");

    const gloss =
        document.querySelector("#lt-gloss");

    const current =
        document.querySelector("#librastube-debug-current");

    if(original){

        original.textContent =
            "Original: " +
            (data.original ?? "-");

    }

    if(gloss){

        gloss.textContent =
            "Gloss: " +
            (data.gloss ?? "-");

    }

    if(current){

        current.textContent =
            data.current ?? "-";

    }

}