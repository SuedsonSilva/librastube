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

} from "./providers/youtube.js";



import {
  getPlayerCaptions

} from "./providers/youtubePlayer.js";






export function initializeSubtitleModule(){


  console.log(
    "📝 Subtitle Module iniciado."
  );



  console.log(
    "🎬 Tentando extrair legenda pelo player..."
  );



  const playerCaptions =
    getPlayerCaptions();



  if(playerCaptions){


    console.log(
      "✅ Legendas encontradas pelo player:",
      playerCaptions
    );


    return;

  }



  console.log(
    "⚠️ Player não retornou legenda. Tentando método antigo..."
  );



  const captionUrl =
    getYouTubeCaptionUrl();



  if(captionUrl){


    fetchSubtitle(
      captionUrl
    );


  }



}