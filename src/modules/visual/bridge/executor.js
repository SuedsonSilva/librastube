/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Executor
 *
 * ==========================================================
 */

import { renderSign } from "../renderEngine.js";

export function executeCommand(command){

    console.log(
        "🎬 Executor recebeu comando."
    );

    switch(command.type){

        case "PLAY_SIGN":

            renderSign(
                command.payload
            );

            break;

        default:

            console.warn(
                "Comando desconhecido."
            );

    }

}