/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Controle do módulo de legendas
 *
 * ==========================================================
 */


import {
  getYouTubeCaptionUrl,
  fetchSubtitle
} from "./youtubeSubtitle.js";



export function initializeSubtitleModule(){


  console.log(
    "📝 Subtitle Module iniciado."
  );



  const captionUrl =
    getYouTubeCaptionUrl();



  if(captionUrl){


    fetchSubtitle(captionUrl);


  }


}