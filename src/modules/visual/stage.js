/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Stage
 *
 * Responsável por criar a área onde
 * qualquer renderizador será exibido.
 *
 * ==========================================================
 */

let stage;

export function createStage() {

    if (document.querySelector("#librastube-stage")) {

        stage =
            document.querySelector("#librastube-stage");

        return stage;

    }

    stage = document.createElement("div");

    stage.id = "librastube-stage";

    Object.assign(stage.style, {

        position: "fixed",

        bottom: "30px",

        right: "30px",

        width: "320px",

        height: "320px",

        background: "#181818",

        border: "2px solid #00ff99",

        borderRadius: "16px",

        zIndex: 999999,

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        overflow: "hidden",

        boxShadow: "0 0 20px rgba(0,0,0,.45)"

    });

    const avatar = document.createElement("div");

    avatar.id = "librastube-avatar";

    avatar.style.fontSize = "120px";

    avatar.textContent = "🤟";

    stage.appendChild(avatar);

    document.body.appendChild(stage);

    console.log(
        "🎭 Stage criado."
    );

    return stage;

}

export function updateStage(word){

    const avatar =
        document.querySelector("#librastube-avatar");

    if(!avatar) return;

    avatar.innerHTML = `

        <div style="text-align:center">

            <div style="font-size:110px">

                🤟

            </div>

            <div style="
                color:white;
                margin-top:10px;
                font-size:24px;
                font-weight:bold;
            ">

                ${word}

            </div>

        </div>

    `;

}