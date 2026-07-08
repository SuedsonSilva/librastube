/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Engine
 *
 * Responsável por:
 * - receber estrutura LIBRAS
 * - controlar Player
 * - criar Avatar visual
 * - atualizar Stage
 *
 * ==========================================================
 */


import { on } from "../../core/events.js";


import { renderSigns } from "./renderer.js";


import { startPlayer } from "./player.js";


import { createScene } from "./scene.js";


import { createAvatarView } from "./avatarView.js";



export function initializeVisualModule(){


    console.log(
        "👁️ Visual Engine iniciado."
    );



    /*
    ==========================================
    Cria área visual
    ==========================================
    */


    createScene();




    /*
    ==========================================
    Cria Avatar na tela
    ==========================================
    */


    createAvatarView();




    /*
    ==========================================
    Inicia Player
    ==========================================
    */


    startPlayer();






    /*
    ==========================================
    Recebe tradução LIBRAS
    ==========================================
    */


    on(
        "LIBRAS_STRUCTURE_CREATED",
        (data)=>{


            console.log(
                "👁️ Estrutura recebida pelo Visual Engine:"
            );


            console.log(data);





            const visual =
            renderSigns(
                data.librasStructure
            );





            console.log(
                "🎥 Resultado visual:"
            );


            console.log(visual);



        }

    );


}