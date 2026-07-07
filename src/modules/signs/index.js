/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Signs Module
 *
 * Responsável por:
 * - buscar sinais
 * - consultar dicionário
 *
 * ==========================================================
 */


import { signDictionary } from "./dictionary.js";



export function findSign(word){


    const sign =
        signDictionary[word];



    if(sign){


        console.log(
            "🤟 Sinal encontrado:",
            sign
        );


        return sign;


    }



    console.log(
        "⚠️ Sinal não encontrado:",
        word
    );



    return null;


}