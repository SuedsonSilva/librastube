/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Debug Panel
 *
 * Painel visual temporário para acompanhar
 * toda a execução da tradução.
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

        <h3 style="
            margin:0 0 15px 0;
            color:#00ff99;
            text-align:center;
        ">
            🤟 LibrasTube
        </h3>

        <div id="lt-original"></div>

        <hr>

        <div id="lt-gloss"></div>

        <hr>

        <div id="lt-current"></div>

    `;

    Object.assign(panel.style, {

        position: "fixed",

        right: "20px",

        top: "100px",

        width: "320px",

        background: "#111",

        color: "#fff",

        zIndex: 999999,

        padding: "18px",

        borderRadius: "12px",

        fontSize: "14px",

        fontFamily: "Arial",

        boxShadow: "0 0 18px rgba(0,0,0,.45)"

    });

    document.body.appendChild(panel);

}

export function updateDebugPanel(data) {

    const original =
        document.querySelector("#lt-original");

    const gloss =
        document.querySelector("#lt-gloss");

    const current =
        document.querySelector("#lt-current");

    if (original) {

        original.innerHTML = `
            <strong>📝 Original</strong><br>
            ${data.original ?? "-"}
        `;

    }

    if (gloss) {

        gloss.innerHTML = `
            <strong>🤟 Gloss LIBRAS</strong><br>
            ${data.gloss ?? "-"}
        `;

    }

    if (current) {

        current.innerHTML = `
            <strong>▶ Atual</strong>
            <div style="
                margin-top:10px;
                font-size:30px;
                font-weight:bold;
                color:#00ff99;
                text-align:center;
            ">
                ${data.current ?? "-"}
            </div>
        `;

    }

}