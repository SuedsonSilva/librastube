/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Engine
 *
 * Responsável por:
 * - receber a tradução em LIBRAS
 * - renderizar os sinais
 * - controlar a cena
 * - enviar sinais para o Avatar
 *
 * ==========================================================
 */


import { on } from "../../core/events.js";

import { renderSigns } from "./renderer.js";

import { startPlayer } from "./player.js";

import { createScene } from "./scene.js";

import { updateAvatar } from "./avatar.js";





export function initializeVisualModule() {


    console.log(
        "👁️ Visual Engine iniciado."
    );





    /*
    ==================================================
    Cria área visual
    ==================================================
    */


    createScene();






    /*
    ==================================================
    Inicia Player
    ==================================================
    */


    startPlayer();








    /*
    ==================================================
    Recebe estrutura criada pelo Translator
    ==================================================
    */


    on(
        "LIBRAS_STRUCTURE_CREATED",
        (data)=>{



            console.log(
                "👁️ Estrutura recebida pelo Visual Engine:"
            );


            console.log(data);







            /*
            ==================================================
            Envia sinais para o Renderer
            ==================================================
            */


            const visual =
                renderSigns(
                    data.librasStructure
                );








            console.log(
                "🎥 Resultado visual:"
            );


            console.log(visual);








            /*
            ==================================================
            Proteção:
            
            Só envia para Avatar se realmente
            existir uma sequência válida.
            
            ==================================================
            */


            if(
                Array.isArray(visual)
            ){



                visual.forEach(sign=>{


                    updateAvatar(sign);


                });



            }
            else {



                console.warn(
                    "⚠️ Nenhum sinal visual recebido."
                );


            }




        }

    );



}