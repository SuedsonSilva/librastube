/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Libras Interpreter
 *
 * Responsável por:
 *
 * - receber uma frase em português
 * - analisar palavras importantes
 * - reorganizar estrutura inicial para LIBRAS
 *
 * Futuramente:
 * - IA
 * - banco de sinais
 * - avatar 3D
 *
 * ==========================================================
 */

import { buildSignSequence } from "../sign-engine/index.js";


export function interpretLibras(text) {


    console.log(
        "🤟 Interpreter recebeu:"
    );


    console.log(text);



    /*
    ==========================================
    Normalização do texto
    ==========================================
    */


    const normalized = text
        .toUpperCase()
        .replace(/[.,!?]/g, "")
        .trim();



    /*
    ==========================================
    Separação das palavras
    ==========================================
    */


    const words = normalized.split(" ");




    /*
    ==========================================
    Estrutura inicial LIBRAS
    ==========================================

    Por enquanto:
    mantemos as palavras importantes.

    Futuramente:
    teremos regras reais de gramática.

    ==========================================
    */


    const signs = words.filter(word => {


        return word.length > 2;


    });



    const mappedSigns =
    buildSignSequence(signs);



const result = {


    original:text,


    signs:mappedSigns,


    createdAt:Date.now()


};



    console.log(
        "👐 Sinais interpretados:"
    );


    console.log(result);



    return result;


}