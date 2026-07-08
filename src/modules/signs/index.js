/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Signs Module
 *
 * Responsável por:
 * - buscar sinais
 * - consultar dicionário
 * - preparar dados para avatar
 *
 * ==========================================================
 */


import { signDictionary } from "./dictionary.js";





/**
 * ==========================================================
 * Normaliza palavra
 *
 * Evita problemas:
 *
 * "você"
 * "VOCÊ"
 * " você "
 *
 * ==========================================================
 */


function normalizeWord(word){


    return word
        .toUpperCase()
        .trim();


}








/**
 * ==========================================================
 *
 * Busca sinal no dicionário
 *
 * ==========================================================
 */


export function findSign(word){



    const normalized =
        normalizeWord(word);





    const sign =
        signDictionary[normalized];





    if(sign){


        console.log(
            "🤟 Sinal encontrado:",
            sign
        );



        return {


            word: normalized,


            ...sign,


            status:"found"



        };


    }






    console.log(

        "⚠️ Sinal não encontrado:",

        normalized

    );






    return {


        word: normalized,


        signal:null,


        status:"missing"



    };



}








/**
 * ==========================================================
 *
 * Retorna todos os sinais
 *
 * Futuramente usado para:
 *
 * - pesquisa
 * - estatística
 * - treinamento IA
 *
 * ==========================================================
 */


export function getAllSigns(){


    return signDictionary;


}