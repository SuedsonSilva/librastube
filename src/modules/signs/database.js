/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Sign Database
 *
 * Banco inicial de sinais Libras.
 *
 * Futuramente será substituído por:
 * - vídeos
 * - animações 3D
 * - IA
 *
 * ==========================================================
 */



const signsDatabase = {


    "VOCÊ": {

        category:"pronome",

        type:"basic",

        signal:"VOCÊ"

    },


    "EU": {

        category:"pronome",

        type:"basic",

        signal:"EU"

    },


    "QUERO": {

        category:"verbo",

        type:"basic",

        signal:"QUERO"

    },


    "FALAR": {

        category:"verbo",

        type:"basic",

        signal:"FALAR"

    },


    "MUITO": {

        category:"intensidade",

        type:"expression",

        signal:"MUITO"

    },


    "PÁGINA": {

        category:"substantivo",

        type:"object",

        signal:"PÁGINA"

    },


    "PASTA": {

        category:"substantivo",

        type:"object",

        signal:"PASTA"

    }


};





export function findSign(word){


    const normalized =
        word
        .toUpperCase()
        .trim();



    return signsDatabase[normalized] || null;


}






export function getAllSigns(){


    return signsDatabase;


}