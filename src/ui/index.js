/**
 * ==========================================================
 * LIBRASTUBE
 *
 * UI Manager
 *
 * Responsável por:
 * - inicializar interface
 * - ouvir eventos
 * - atualizar painel
 *
 * ==========================================================
 */


import {
  createPanel,
  updateTranslationButton
} from "./panel.js";


import { injectStyles } from "./styles.js";


import { on } from "../core/events.js";


import {
  updateVideoTitle,
  updateSubtitleStatus,
  updateTranslationStatus
} from "./status.js";







export function initializeUI(){


  console.log(
    "🎨 UI iniciada."
  );



  injectStyles();



  createPanel();






  /*
  ==========================================
  Mudança de vídeo
  ==========================================
  */


  on(
    "VIDEO_CHANGED",
    (video)=>{


      console.log(
        "🎯 Evento recebido pela UI"
      );



      updateVideoTitle(
        video.title
      );



      updateSubtitleStatus(
        "🔍 Procurando..."
      );



      updateTranslationStatus(
        "⚪ Desligada"
      );



      updateTranslationButton(
        "▶ Ativar Tradução"
      );


    }
  );






  /*
  ==========================================
  Status da legenda
  ==========================================
  */


  on(
    "SUBTITLE_STATUS_CHANGED",
    (subtitle)=>{


      if(subtitle.available){


        updateSubtitleStatus(
          "✅ Disponível"
        );


      }else{


        updateSubtitleStatus(
          "❌ Não encontrada"
        );


      }


    }
  );








  /*
  ==========================================
  Status da tradução
  ==========================================
  */


  on(
    "TRANSLATION_STATUS_CHANGED",
    (translation)=>{


      console.log(
        "🌎 Status tradução atualizado",
        translation
      );




      if(translation.active === true){



        updateTranslationStatus(
          "🟢 Ativa"
        );



        updateTranslationButton(
          "⏹ Desativar Tradução"
        );



      }




      else {



        updateTranslationStatus(
          "⚪ Desligada"
        );



        updateTranslationButton(
          "▶ Ativar Tradução"
        );



      }



    }
  );



}