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
 * - criar interface visual
 *
 * ==========================================================
 */


import { on } from "../../core/events.js";


import { renderSigns } from "./renderer.js";


import { startPlayer } from "./player.js";


import { createScene } from "./scene.js";


import { updateAvatar } from "./avatar.js";


import { createStage } from "./stage.js";


import { injectVisualStyles } from "./styles.js";





export function initializeVisualModule() {


    console.log(
        "👁️ Visual Engine iniciado."
    );



    /*
    ==================================================
    Injeta estilos visuais
    ==================================================
    */


    injectVisualStyles();




    /*
    ==================================================
    Cria área visual
    ==================================================
    */


    createStage();




    /*
    ==================================================
    Cria estrutura da cena
    ==================================================
    */


    createScene();




    /*
    ==================================================
    Inicia Player
    responsável por consumir fila
    ==================================================
    */


    startPlayer();





    /*
    ==================================================
    Recebe estrutura LIBRAS criada
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
            ==========================================
            Converte estrutura em sequência visual
            ==========================================
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
            ==========================================
            Envia sinais para Avatar
            ==========================================
            */


            visual.forEach(sign=>{


                updateAvatar(sign);


            });



        }

    );



}