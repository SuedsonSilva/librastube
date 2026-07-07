/**
 * ==========================================================
 * LIBRASTUBE
 * Painel Principal
 *
 * Responsável por:
 * - criar interface
 * - controlar ações do usuário
 * - atualizar elementos visuais
 *
 * ==========================================================
 */


import { emit } from "../core/events.js";



let translationButton = null;

let translationActive = false;





export function createPanel() {


  if (document.querySelector("#librastube-panel")) {
    return;
  }



  const panel = document.createElement("div");


  panel.id = "librastube-panel";



  panel.innerHTML = `

      <div id="librastube-header">

          🤟 LIBRASTUBE

      </div>


      <div class="item">

          <strong>Status:</strong>

          <span id="lt-status">
              🟢 Ativo
          </span>

      </div>


      <div class="item">

          <strong>Plataforma:</strong>

          <span>
              YouTube
          </span>

      </div>


      <div class="item">

          <strong>Vídeo:</strong>

          <span id="lt-video">
              Detectado
          </span>

      </div>


      <div class="item">

          <strong>Legenda:</strong>

          <span id="lt-subtitle">
              Procurando...
          </span>

      </div>


      <div class="item">

          <strong>Tradução:</strong>

          <span id="lt-translation">
              Desligada
          </span>

      </div>



      <button id="lt-button">

          ▶ Ativar Tradução

      </button>

  `;



  document.body.appendChild(panel);



  translationButton =
    panel.querySelector("#lt-button");



  translationButton.addEventListener(
    "click",
    () => {



      if(!translationActive){


        console.log(
          "▶ Solicitação para ativar tradução"
        );



        translationActive = true;



        updateTranslationButton(
          "⏳ Iniciando..."
        );



        emit(
          "TRANSLATION_REQUESTED",
          {
            enabled:true
          }
        );


      }else{


        console.log(
          "⏹ Solicitação para desligar tradução"
        );



        translationActive = false;



        updateTranslationButton(
          "▶ Ativar Tradução"
        );



        emit(
          "TRANSLATION_STOPPED",
          {
            enabled:false
          }
        );


      }



    }
  );


}





export function updateTranslationButton(text){


  console.log(
    "🔘 Atualizando botão:",
    text
  );



  if(!translationButton){

    return;

  }



  translationButton.textContent = text;


}