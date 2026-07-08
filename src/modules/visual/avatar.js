/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Avatar Controller
 *
 * Responsável por:
 * - receber sinais do Player
 * - atualizar estado
 * - controlar animação
 * - enviar para Stage
 *
 * ==========================================================
 */



import { updateStage } from "./stage.js";


import {
    setAvatarState,
    addAvatarHistory
} from "./avatarState.js";


import {
    playAnimation
} from "./animationPlayer.js";





export async function updateAvatar(sign){



    console.log(
        "🧍 Avatar recebeu sinal:"
    );


    console.log(sign);





    /*
    ==================================================
    Estado inicial:
    Avatar preparando movimento
    ==================================================
    */


    setAvatarState({

        currentSign: sign,

        status:"preparing"

    });





    /*
    ==================================================
    Registra histórico
    ==================================================
    */


    addAvatarHistory(
        sign
    );





    /*
    ==================================================
    Cria uma animação temporária
    baseada no sinal recebido
    ==================================================
    */


    const animation = {


        word: sign.word,


        animation:
            sign.signal || sign.word,


        duration:1200


    };





    console.log(
        "🎞️ Animação criada:"
    );


    console.log(animation);







    /*
    ==================================================
    Executa animação
    ==================================================
    */


    setAvatarState({

        status:"executing"

    });



    await playAnimation(
        animation
    );







    /*
    ==================================================
    Atualiza Stage
    ==================================================
    */


    updateStage(
        sign
    );







    /*
    ==================================================
    Finaliza movimento
    ==================================================
    */


    setAvatarState({

        status:"completed"

    });



    console.log(
        "✅ Avatar terminou sinal:"
    );


    console.log(sign);



}