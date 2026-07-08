/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Animation Player
 *
 * Responsável por:
 * - receber uma animação
 * - controlar execução
 * - simular reprodução
 *
 * Futuramente:
 * - vídeo do sinal
 * - avatar 3D
 * - modelo IA
 *
 * ==========================================================
 */



export function playAnimation(animation){


    console.log(
        "🎬 Reproduzindo animação:"
    );


    console.log(animation);



    return new Promise(resolve => {



        setTimeout(()=>{


            console.log(
                "✅ Animação finalizada:",
                animation.animation
            );


            resolve();



        }, animation.duration || 1000);



    });



}
