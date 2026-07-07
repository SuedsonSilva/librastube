/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Word Normalizer
 *
 * Responsável por:
 *
 * - limpar palavras vindas da legenda
 * - transformar variações
 * - preparar busca no dicionário
 *
 * ==========================================================
 */



const variations = {


    INSTALOU:"INSTALAR",

    INSTALANDO:"INSTALAR",

    INSTALA:"INSTALAR",



    CRIANDO:"CRIAR",

    CRIOU:"CRIAR",



    PASTINHA:"PASTA",

    PASTINHAS:"PASTA",



    COMPUTADORES:"COMPUTADOR",



    ABRIU:"ABRIR",

    ABRINDO:"ABRIR"


};





export function normalizeWord(word){



    const clean =
        word
        .toUpperCase()
        .replace(/[.,!?]/g,"")
        .trim();





    if(variations[clean]){


        console.log(
            "🔄 Palavra normalizada:",
            clean,
            "→",
            variations[clean]
        );


        return variations[clean];


    }





    return clean;


}