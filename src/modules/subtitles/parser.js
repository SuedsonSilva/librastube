/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Subtitle Parser
 *
 * Responsável por:
 * - interpretar legenda do YouTube
 * - transformar XML em dados
 *
 * ==========================================================
 */


export function parseSubtitleXML(xml){


  console.log(
    "🔎 Processando legenda..."
  );



  /*
  ==========================================
  Limpa caracteres escapados
  ==========================================
  */


  const cleanXML =
    xml
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&amp;", "&");





  const parser =
    new DOMParser();




  const document =
    parser.parseFromString(
      cleanXML,
      "text/xml"
    );





  const texts =
    [
      ...document.querySelectorAll("text")
    ];





  const subtitles =
    texts.map(
      item=>{


        return {


          start:
            Number(
              item.getAttribute("start")
            ),



          duration:
            Number(
              item.getAttribute("dur") || 0
            ),



          text:
            item.textContent
              .trim()


        };


      }
    );





  console.log(
    "📝 Total de legendas encontradas:",
    subtitles.length
  );



  console.log(
    subtitles.slice(0,5)
  );



  return subtitles;


}