/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Libras Grammar Rules
 *
 * Regras iniciais de adaptação
 *
 * ==========================================================
 */



export function applyGrammarRules(words){



    let result = [...words];




    /*
    ======================================
    Regra:
    
    A GENTE → NÓS
    ======================================
    */


    result =
        result.map(word => {


            if(word === "GENTE"){

                return "NÓS";

            }


            return word;


        });







    /*
    ======================================
    Regra:

    FAZ → FAZER

    ======================================
    */


    result =
        result.map(word => {


            if(word === "FAZ"){

                return "FAZER";

            }


            return word;


        });






    return result;


}