/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Subtitle Parser
 *
 * Responsável por:
 * - receber legenda bruta
 * - transformar em objetos utilizáveis
 *
 * ==========================================================
 */



export function parseSubtitleData(data){


  console.log(
    "🔎 Parser iniciado..."
  );



  if(!data){


    console.log(
      "⚠️ Nenhum dado recebido"
    );


    return [];

  }



  try{


    const json =
      JSON.parse(data);



    console.log(
      "📦 JSON recebido:"
    );


    console.log(
      json
    );



    const events =
      json.events;



    if(!events){


      console.log(
        "⚠️ Nenhum evento encontrado"
      );


      return [];

    }



    const subtitles =
      events

      .filter(
        event =>
          event.segs
      )


      .map(

        event=>{


          const text =
            event.segs

            .map(
              seg=>seg.utf8
            )

            .join("");



          return {

            start:
              event.tStartMs / 1000,


            duration:
              event.dDurationMs / 1000,


            text:
              text.trim()

          };


        }

      );




    console.log(
      "📝 Legendas processadas:"
    );


    console.log(
      subtitles
    );



    return subtitles;



  }

  catch(error){


    console.error(
      "❌ Erro no parser:",
      error
    );


    return [];

  }



}