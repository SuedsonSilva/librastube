/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Renderer
 *
 * Responsável por transformar
 * estruturas LIBRAS em sequência visual.
 *
 * Futuramente:
 *
 * - Avatar 3D
 * - Vídeos dos sinais
 * - Animações
 *
 * ==========================================================
 */


export function renderSigns(signs){


    console.log(
        "🎬 Visual Renderer recebeu:"
    );


    console.log(signs);



    const sequence = signs.map(sign => {


        return {

            word: sign.word || sign,

            action:
                "WAITING_VISUAL_ASSET"

        };


    });



    console.log(
        "🎥 Sequência visual criada:"
    );


    console.log(sequence);



    return sequence;


}