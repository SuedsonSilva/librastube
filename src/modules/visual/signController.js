/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Sign Controller
 *
 * Responsável por controlar
 * o ciclo de vida de cada sinal.
 *
 * ==========================================================
 */


import {
    setAvatarState,
    addAvatarHistory
} from "./avatarState.js";



import {
    updateAvatar
} from "./avatar.js";




let currentSign = null;





/**
 * ==========================================================
 * Inicia execução de um sinal
 * ==========================================================
 */

export function executeSign(sign){


    console.log(
        "🎯 Sign Controller recebeu:"
    );


    console.log(sign);



    currentSign = sign;



    /*
    ==========================================
    Estado preparando
    ==========================================
    */


    updateStatus(
        "preparing"
    );




    /*
    ==========================================
    Pequena espera simulando preparação
    futura do avatar.
    ==========================================
    */


    setTimeout(()=>{


        updateStatus(
            "executing"
        );



        updateAvatar(
            sign
        );



        finishSign();



    },300);



}





/**
 * ==========================================================
 * Atualiza estado do avatar
 * ==========================================================
 */


function updateStatus(status){



    setAvatarState({

        currentSign,

        status

    });



}




/**
 * ==========================================================
 * Finaliza sinal
 * ==========================================================
 */


function finishSign(){


    console.log(
        "✅ Sinal concluído:"
    );


    console.log(
        currentSign
    );



    addAvatarHistory(
        currentSign
    );



    setAvatarState({

        status:"completed"

    });



    console.log(
        "➡️ Pronto para próximo sinal."
    );


}






export function getCurrentSign(){


    return currentSign;


}