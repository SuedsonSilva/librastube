/**
 * ==========================================================
 * LIBRASTUBE
 * Provider: YouTube
 *
 * Responsável por:
 * - iniciar integração com YouTube
 * - detectar vídeo atual
 * - avisar o sistema quando mudar de vídeo
 * ==========================================================
 */


import { getCurrentVideo } from "./player.js";
import { observeYouTubeNavigation } from "./observer.js";
import { emit } from "../../core/events.js";



/**
 * Pega as informações do vídeo atual
 * e envia para o sistema de eventos
 */
function showCurrentVideo() {

  const video = getCurrentVideo();


  console.log("🎬 Vídeo detectado:");

  console.table(video);



  // Avisamos o restante da aplicação
  emit(
    "VIDEO_CHANGED",
    video
  );

}




/**
 * Inicializa o Provider do YouTube
 */
export function initializeYouTubeProvider() {


  console.log("📺 YouTube Provider iniciado.");



  // Detecta o vídeo que já está aberto
  showCurrentVideo();



  // Observa mudanças de vídeo
  observeYouTubeNavigation(() => {


    console.log("🔄 Mudança detectada no YouTube");



    // Pequeno atraso para o YouTube terminar
    // de atualizar título e informações
    setTimeout(() => {


      showCurrentVideo();


    }, 1000);


  });


}