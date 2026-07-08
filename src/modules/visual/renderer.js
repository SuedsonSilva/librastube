/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Renderer
 *
 * Responsável por:
 * - receber estrutura de sinais
 * - enviar para fila visual
 * - devolver sequência para o Visual Engine
 *
 * ==========================================================
 */


import { enqueue } from "./queue.js";





export function renderSigns(signs) {



    console.log(
        "🎨 Renderer recebeu:"
    );



    console.table(signs);




    /*
    ==================================================
    Proteção contra dados vazios
    ==================================================
    */


    if(
        !Array.isArray(signs)
    ){


        console.warn(
            "⚠️ Renderer recebeu dados inválidos:",
            signs
        );


        return [];

    }







    signs.forEach(sign => {



        console.log(
            "📥 Sinal entrou na fila:"
        );


        console.log(sign);



        enqueue(sign);



    });







    /*
    ==================================================
    Retorna para o Visual Engine
    ==================================================
    */


    return signs;



}