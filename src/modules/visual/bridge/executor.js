/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Executor
 *
 * ==========================================================
 */

import { updateStage } from "../stage.js";

export function executeCommand(command){

    console.log(
        "🎬 Executor recebeu comando:"
    );

    console.log(command);

    switch(command.type){

        case "PLAY_SIGN":

            playSign(
                command.payload
            );

            break;

        default:

            console.warn(
                "Comando desconhecido."
            );

    }

}

function playSign(sign){

    updateStage(
        sign.word
    );

}