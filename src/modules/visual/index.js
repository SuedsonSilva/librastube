/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Engine
 *
 * Responsável pela saída visual
 * da tradução LIBRAS.
 *
 * ==========================================================
 */


import { on } from "../../core/events.js";

import { renderSigns } from "./renderer.js";



export function initializeVisualModule(){


    console.log(
        "👁️ Visual Engine iniciado."
    );



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