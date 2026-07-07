/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Sign Engine
 *
 * Responsável por:
 *
 * - receber palavras interpretadas
 * - buscar sinais correspondentes
 * - montar sequência de sinais
 *
 * ==========================================================
 */

import { applyLibrasGrammar } from "../libras-grammar/index.js";
import { normalizeWord } from "../signs/normalizer.js";
import { findSign } from "../signs/index.js";




export function buildSignSequence(words){
    
    words =
    applyLibrasGrammar(words);



    console.log(
        "👐 Sign Engine recebeu:"
    );


    console.log(words);





    const sequence = words.map(word => {



        const normalizedWord =
            normalizeWord(word);



    const sign =
        findSign(normalizedWord);



        if(sign){


            return sign;


        }



        return {


            word,


            signal:null,


            status:"missing"


        };


    });





    console.log(
        "🎬 Sequência de sinais criada:"
    );


    console.log(sequence);



    return sequence;


}