/**
 * ==========================================================
 * LIBRASTUBE
 *
 * YouTube Player Subtitle Extractor
 *
 * Busca legendas diretamente do player
 *
 * ==========================================================
 */



export function getPlayerCaptions(){



  console.log(
    "🔎 Procurando dados internos do player..."
  );



  const scripts =
    [...document.scripts];



  for(
    const script of scripts
  ){



    const text =
      script.textContent;



    if(
      text.includes(
        "ytInitialPlayerResponse"
      )
    ){



      console.log(
        "🎯 ytInitialPlayerResponse encontrado"
      );



      const match =
        text.match(
          /ytInitialPlayerResponse\s*=\s*(\{.*?\});/s
        );



      if(!match){


        console.log(
          "❌ Não conseguiu extrair JSON"
        );


        return null;

      }




      try{


        const data =
          JSON.parse(
            match[1]
          );



        const captions =
          data
          ?.captions
          ?.playerCaptionsTracklistRenderer;



        if(!captions){


          console.log(
            "⚠️ Vídeo sem legenda"
          );


          return null;

        }



        console.log(
          "📚 Legendas encontradas:",
          captions.captionTracks
        );



        return captions.captionTracks;



      }
      catch(error){


        console.error(
          "❌ Erro lendo player:",
          error
        );


      }


    }


  }



  console.log(
    "❌ Dados do player não encontrados"
  );



  return null;


}