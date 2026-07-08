/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Avatar Controller
 *
 * Responsável por:
 * - receber sinais do Player
 * - atualizar estado
 * - controlar futura animação
 *
 * ==========================================================
 */


import { updateStage } from "./stage.js";


import {
    setAvatarState,
    addAvatarHistory
} from "./avatarState.js";





export function updateAvatar(sign){



    console.log(
        "🧍 Avatar executando sinal:"
    );


    console.log(sign);




    /*
    ==================================================
    Atualiza estado interno
    ==================================================
    */


    setAvatarState({

        currentSign:sign,


        status:"executing"


    });




    addAvatarHistory(
        sign
    );




    /*
    ==================================================
    Atualiza interface visual
    ==================================================
    */


    updateStage(
        sign
    );



}