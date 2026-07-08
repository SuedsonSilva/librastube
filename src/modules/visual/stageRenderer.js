/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Stage Renderer
 *
 * Responsável por desenhar
 * a área visual do avatar.
 *
 * ==========================================================
 */


let stageElement = null;



export function createStageRenderer(){


    if(stageElement){

        return;

    }



    stageElement =
    document.createElement("div");



    stageElement.id =
    "librastube-stage";



    stageElement.innerHTML = `

        <div class="avatar-placeholder">

            🤟

        </div>


        <div class="avatar-word">

            Aguardando sinal...

        </div>


        <div class="avatar-status">

            Pronto

        </div>

    `;



    document.body.appendChild(
        stageElement
    );



    console.log(
        "🎭 Stage Renderer criado."
    );


}





export function renderAvatar(sign){



    if(!stageElement){

        createStageRenderer();

    }



    const word =
    stageElement.querySelector(
        ".avatar-word"
    );



    const status =
    stageElement.querySelector(
        ".avatar-status"
    );



    word.textContent =
        sign.word;



    status.textContent =
        "Executando sinal";



    console.log(
        "🎭 Avatar visual atualizado:",
        sign
    );



}