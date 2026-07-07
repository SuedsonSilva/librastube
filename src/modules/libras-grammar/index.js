/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Libras Grammar Engine
 *
 * Responsável por:
 *
 * - adaptar português para estrutura Libras
 * - remover palavras auxiliares
 * - preparar sequência de sinais
 *
 * ==========================================================
 */



/*
================================================
Palavras que geralmente não possuem sinal direto
================================================
*/

import { applyGrammarRules } from "./rules.js";

const ignoredWords = [

    "O",
    "A",
    "OS",
    "AS",

    "UM",
    "UMA",

    "DE",
    "DO",
    "DA",

    "PARA",

    "E",

    "QUE",

    "VAI"

];






export function applyLibrasGrammar(words){



    console.log(
        "🧠 Grammar Engine recebeu:"
    );


    console.log(words);






    const filtered =
        words.filter(word => {



            if(
                ignoredWords.includes(word)
            ){


                console.log(
                    "🗑 Removendo:",
                    word
                );


                return false;

            }



            return true;


        });





    const adapted =
        applyGrammarRules(filtered);

    console.log(
        "🤟 Estrutura Libras adaptada:"
    );


    console.log(adapted);




    return adapted;


}