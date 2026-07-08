/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Avatar Renderer
 *
 * Responsável por:
 * - criar avatar visual
 * - atualizar aparência
 * - preparar animações
 *
 * ==========================================================
 */


let avatarElement = null;



export function createAvatar(){


    if(
        avatarElement
    ){

        return;

    }



    console.log(
        "🧍 Criando Avatar visual..."
    );



    avatarElement =
        document.createElement(
            "div"
        );



    avatarElement.id =
        "librastube-avatar";



    avatarElement.innerHTML = `


        <div class="avatar-head">
            🙂
        </div>


        <div class="avatar-body">

            <div class="arm left">
                🤚
            </div>


            <div class="body">
                👕
            </div>


            <div class="arm right">
                🤚
            </div>

        </div>


        <div class="avatar-status">
            Aguardando...
        </div>


    `;



    document.body.appendChild(
        avatarElement
    );



}





export function renderAvatarState(sign){



    if(
        !avatarElement
    ){

        createAvatar();

    }



    const status =
        avatarElement.querySelector(
            ".avatar-status"
        );



    status.textContent =
        `Sinal: ${sign.word}`;



    console.log(
        "🎭 Avatar renderizado:",
        sign
    );



}