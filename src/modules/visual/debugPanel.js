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

        <div id="lt-original">Original:</div>

        <div id="lt-gloss">Gloss:</div>

        <div id="lt-current">Sinal:</div>

    `;

    Object.assign(panel.style, {

        position: "fixed",

        right: "20px",

        top: "100px",

        width: "300px",

        background: "#111",

        color: "#fff",

        zIndex: 999999,

        padding: "15px",

        borderRadius: "10px",

        fontSize: "14px",

        fontFamily: "Arial"

    });

    document.body.appendChild(panel);

}

export function updateDebugPanel(data) {

    document.querySelector("#lt-original").textContent =
        "Original: " + (data.original ?? "-");

    document.querySelector("#lt-gloss").textContent =
        "Gloss: " + (data.gloss ?? "-");

    document.querySelector("#lt-current").textContent =
        "Atual: " + (data.current ?? "-");

}