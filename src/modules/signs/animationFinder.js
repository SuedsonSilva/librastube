/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Animation Finder
 *
 * Procura a animação correspondente
 * ao sinal recebido.
 *
 * ==========================================================
 */



import {
    animationDictionary
} from "./animations.js";





export function findAnimation(word){



    const animation =
        animationDictionary[word];




    if(animation){


        console.log(
            "🎬 Animação encontrada:",
            animation
        );


        return animation;


    }





    console.log(
        "⚠️ Animação não encontrada:",
        word
    );



    return null;



}
