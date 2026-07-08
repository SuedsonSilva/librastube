/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Avatar Controller
 *
 * Responsável por:
 * - receber sinais do Player
 * - controlar ciclo de execução
 * - atualizar estado interno
 * - alimentar camada visual
 *
 * Futuramente:
 * - animações reais LIBRAS
 * - avatar 2D/3D
 * - sincronização corporal
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
        "🧍 Avatar recebeu sinal:"
    );


    console.log(sign);





    /*
    ==================================================
    1 - Preparação do Avatar
    ==================================================

    Aqui futuramente entra:
    - carregar animação
    - preparar pose inicial
    - ajustar tempo do movimento

    ==================================================
    */


    setAvatarState({

        currentSign: sign,

        status:"preparing"

    });





    console.log(
        "🧍 Avatar preparando movimento..."
    );







    /*
    ==================================================
    2 - Execução do sinal
    ==================================================
    */


    setTimeout(()=>{


        setAvatarState({

            currentSign: sign,

            status:"executing"

        });



        console.log(
            "🧍 Avatar executando sinal:"
        );


        console.log(sign);





        /*
        ==============================================
        Atualiza palco visual
        ==============================================
        */


        updateStage(
            sign
        );




        addAvatarHistory(
            sign
        );





    },300);









    /*
    ==================================================
    3 - Finalização do sinal
    ==================================================

    Simula o tempo da animação.

    Depois vamos trocar isso pelo
    tempo real do movimento.

    ==================================================
    */


    setTimeout(()=>{


        setAvatarState({

            currentSign: sign,

            status:"completed"

        });



        console.log(
            "✅ Sinal concluído:"
        );


        console.log(sign);



    },1200);



}