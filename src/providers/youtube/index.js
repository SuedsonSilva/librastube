/**
 * ==========================================================
 * LIBRASTUBE
 * Provider: YouTube
 * ==========================================================
 */

import { getCurrentVideo } from "./player.js";
import { observeYouTubeNavigation } from "./observer.js";


function showCurrentVideo(){

  const video = getCurrentVideo();

  console.log("🎬 Vídeo detectado:");

  console.table(video);

}



export function initializeYouTubeProvider() {

  console.log("📺 YouTube Provider iniciado.");

  showCurrentVideo();


  observeYouTubeNavigation(() => {

    console.log("🔄 Mudança detectada no YouTube");


    setTimeout(() => {

      showCurrentVideo();

    }, 1000);


  });

}