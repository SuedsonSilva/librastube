/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Avatar View
 *
 * Responsável por:
 * - criar o avatar na tela
 * - atualizar aparência visual
 *
 * ==========================================================
 */
console.log(
    "📦 avatarView.js carregado"
);


import "./styles.css";



let avatarElement = null;




export function createAvatarView(){


    console.log(
        "🧍 Criando Avatar visual..."
    );



    /*
    ==========================================
    Evita criar duas vezes
    ==========================================
    */


    if(avatarElement){

        console.log(
            "⚠️ Avatar já existe."
        );

        return avatarElement;

    }





    /*
    ==========================================
    Cria container principal
    ==========================================
    */


    avatarElement = document.createElement(
        "div"
    );


    avatarElement.id =
        "libras-avatar";





    /*
    ==========================================
    Cria cabeça
    ==========================================
    */


    const head =
    document.createElement(
        "div"
    );


    head.className =
        "avatar-head";





    /*
    ==========================================
    Cria corpo
    ==========================================
    */


    const body =
    document.createElement(
        "div"
    );


    body.className =
        "avatar-body";





    /*
    ==========================================
    Cria braços
    ==========================================
    */


    const leftArm =
    document.createElement(
        "div"
    );


    leftArm.className =
        "avatar-arm left";




    const rightArm =
    document.createElement(
        "div"
    );


    rightArm.className =
        "avatar-arm right";







    /*
    ==========================================
    Monta avatar
    ==========================================
    */


    avatarElement.appendChild(head);

    avatarElement.appendChild(body);

    avatarElement.appendChild(leftArm);

    avatarElement.appendChild(rightArm);







    /*
    ==========================================
    Coloca na página
    ==========================================
    */


    document.body.appendChild(
        avatarElement
    );





    console.log(
        "✅ Avatar criado na tela:",
        avatarElement
    );



    return avatarElement;


}






export function animateAvatar(){


    if(!avatarElement){

        return;

    }



    avatarElement.classList.add(
        "moving"
    );



    setTimeout(()=>{


        avatarElement.classList.remove(
            "moving"
        );


    },500);



}