/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Sequence Builder
 *
 * Organiza sinais para apresentação.
 *
 * ==========================================================
 */



export function createVisualSequence(signs){


    console.log(
        "🎞️ Criando sequência visual..."
    );



    return signs.map(
        (sign,index)=>({


            id:index,


            word:sign.word,


            category:sign.category,


            duration:1500


        })
    );


}