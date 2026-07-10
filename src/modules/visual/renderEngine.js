/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Render Engine
 *
 * Responsável por desenhar qualquer
 * conteúdo dentro do Stage.
 *
 * Hoje:
 *     Texto
 *
 * Amanhã:
 *     Avatar VLibras
 *
 * ==========================================================
 */

let avatar;

export function initializeRenderEngine(){

    avatar = document.querySelector(
        "#librastube-avatar"
    );

    console.log(
        "🎨 Render Engine iniciado."
    );

}

export function renderSign(sign){

    if(!avatar){

        console.warn(
            "Avatar inexistente."
        );

        return;

    }

    avatar.innerHTML = `

        <div style="text-align:center">

            <div
                style="
                    font-size:110px;
                    animation:pulse .25s;
                "
            >

                🤟

            </div>

            <div
                style="
                    color:#fff;
                    font-size:24px;
                    margin-top:10px;
                    font-weight:bold;
                "
            >

                ${sign.word}

            </div>

        </div>

    `;

}