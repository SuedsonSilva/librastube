/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Player
 *
 * Responsável por:
 * - consumir a fila de sinais
 * - controlar o tempo de reprodução
 * - enviar sinais para o Avatar futuramente
 *
 * ==========================================================
 */


import { dequeue, hasItems } from "./queue.js";

import { updateAvatar } from "./avatar.js";

import { executeSign } from "./signController.js";


let playing = false;


/*
==================================================
Tempo de cada sinal.

Futuramente será controlado
pela velocidade do intérprete.
==================================================
*/

const SIGN_DURATION = 800;



export function startPlayer(){


    if(playing){

        console.log(
            "⚠️ Player já está executando."
        );

        return;

    }


    playing = true;


    console.log(
        "▶ Player iniciado."
    );


    loop();


}



/*
==================================================
Loop principal do Player

Ele verifica constantemente
se existe sinal disponível.

==================================================
*/


function loop(){


    if(hasItems()){


        const sign = dequeue();


        console.log(
            "🎬 Player reproduzindo sinal:"
        );


        console.log(sign);



        /*
        ==========================================
        Envia para Avatar
        ==========================================
        */


        executeSign(sign);


        /*
        ==========================================
        Aguarda o tempo do sinal
        ==========================================
        */


        setTimeout(()=>{


            loop();


        }, SIGN_DURATION);



    }


    else {


        /*
        ==========================================
        Nenhum sinal.
        Continua aguardando.
        ==========================================
        */


        setTimeout(()=>{


            loop();


        },200);



    }


}