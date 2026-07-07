/**
 * ==========================================================
 * LIBRASTUBE
 *
 * YouTube Subtitle Provider
 *
 * Responsável por:
 * - encontrar legendas do YouTube
 * - solicitar download para background
 * - receber conteúdo da legenda
 * - enviar para o parser
 *
 * ==========================================================
 */


import { parseSubtitleXML } from "../parser.js";





/**
 * Procura as informações de legenda
 * dentro dos scripts carregados pelo YouTube
 */
export function getYouTubeCaptionUrl(){


  const scripts = [
    ...document.querySelectorAll("script")
  ];



  for(const script of scripts){


    const text =
      script.textContent;



    if(
      text.includes("captionTracks")
    ){


      console.log(
        "📝 Dados de legenda encontrados"
      );



      const match =
        text.match(
          /"captionTracks":(\[.*?\])/s
        );



      if(!match){


        console.log(
          "⚠️ Não conseguiu extrair captionTracks"
        );


        return null;

      }




      const captions =
        JSON.parse(
          match[1]
        );



      console.log(
        "📚 Legendas encontradas:",
        captions
      );




      const captionUrl =
        captions[0].baseUrl
        +
        "&fmt=json3";



      console.log(
        "🔗 URL da legenda encontrada:"
      );


      console.log(
        captionUrl
      );



      return captionUrl;


    }


  }



  console.log(
    "⚠️ Nenhuma legenda encontrada"
  );



  return null;

}







/**
 * Busca legenda através do background
 */
export async function fetchSubtitle(url){



  console.log(
    "📤 Enviando pedido para background..."
  );



  chrome.runtime.sendMessage(

    {
      type:
        "FETCH_SUBTITLE",

      url

    },


    (response)=>{


      if(!response){


        console.log(
          "❌ Sem resposta do background"
        );


        return;

      }




      if(response.success){



        console.log(
          "📥 Legenda recebida do background"
        );



        console.log(
          "TIPO:",
          typeof response.data
        );



        console.log(
          "TAMANHO:",
          response.data.length
        );



        console.log(
          "CONTEÚDO RECEBIDO:"
        );



        console.log(
          response.data.substring(0,1000)
        );



        console.log(
          "🔎 Enviando para parser..."
        );



        const subtitles =
          parseSubtitleXML(
            response.data
          );



        console.log(
          "✅ Legendas prontas:",
          subtitles
        );



      }
      else{


        console.error(
          "❌ Erro retornado pelo background:",
          response.error
        );


      }


    }

  );


}