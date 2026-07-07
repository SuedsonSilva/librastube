/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Translation Engine
 *
 * Responsável por:
 * - receber comandos de tradução
 * - ativar tradução
 * - desativar tradução
 * - informar mudança de estado
 *
 * ==========================================================
 */


import { on, emit } from "../../core/events.js";





let translationActive = false;





export function initializeTranslationModule() {


  console.log(
    "🌎 Translation Engine iniciado."
  );




  /*
  ==========================================
  Ativar tradução
  ==========================================
  */


  on(
    "TRANSLATION_REQUESTED",
    () => {


      console.log(
        "▶ Tradução solicitada pelo usuário."
      );


      startTranslation();


    }
  );





  /*
  ==========================================
  Desativar tradução
  ==========================================
  */


  on(
    "TRANSLATION_STOPPED",
    () => {


      console.log(
        "⏹ Tradução desligada pelo usuário."
      );


      stopTranslation();


    }
  );


}






function startTranslation(){


  translationActive = true;



  console.log(
    "🤟 Iniciando motor de tradução..."
  );



  emit(
    "TRANSLATION_STATUS_CHANGED",
    {
      active:true
    }
  );


}







function stopTranslation(){


  translationActive = false;



  console.log(
    "🛑 Parando motor de tradução..."
  );



  emit(
    "TRANSLATION_STATUS_CHANGED",
    {
      active:false
    }
  );


}