/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Stage
 *
 * Responsável por:
 * - criar área visual
 * - mostrar sinal atual
 * - atualizar informações do Avatar
 *
 * ==========================================================
 */


let stage = null;



export function createStage(){


    if(stage){

        return;

    }


    stage = document.createElement("div");


    stage.id = "librastube-stage";


    stage.innerHTML = `

        <div class="stage-title">
            🤟 LIBRASTUBE
        </div>


        <div class="stage-content">

            <div>
                Sinal atual:
            </div>


            <strong id="current-sign">
                Aguardando...
            </strong>


            <div id="stage-status">
                ⏳ Esperando sinais
            </div>

        </div>

    `;



    document.body.appendChild(stage);



    console.log(
        "🎭 Stage visual criado."
    );


}



/*
==================================================
Atualiza sinal atual
==================================================
*/


export function updateStage(sign){


    if(!stage){

        createStage();

    }



    const current =
        document.querySelector(
            "#current-sign"
        );



    const status =
        document.querySelector(
            "#stage-status"
        );



    if(current){


        current.textContent =
            sign.word;


    }



    if(status){


        status.textContent =
            "🟢 Executando";


    }



    console.log(
        "🎭 Stage atualizado:",
        sign
    );


}