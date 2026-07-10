/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Debug Renderer
 *
 * Primeiro renderizador oficial.
 *
 * ==========================================================
 */

export function renderWithDebug(sign){

    const avatar =
        document.querySelector(
            "#librastube-avatar"
        );

    if(!avatar) return;

    avatar.innerHTML = `

        <div style="text-align:center">

            <div style="font-size:120px">

                🤟

            </div>

            <div
                style="
                    color:white;
                    font-size:24px;
                    font-weight:bold;
                    margin-top:10px;
                "
            >

                ${sign.word}

            </div>

        </div>

    `;

}