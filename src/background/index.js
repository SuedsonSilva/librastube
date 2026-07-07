/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Background Service Worker
 *
 * Responsável por:
 * - receber mensagens do content script
 * - buscar legendas do YouTube
 * - devolver conteúdo para a extensão
 *
 * ==========================================================
 */


console.log(
  "⚙️ Background iniciado."
);



chrome.runtime.onInstalled.addListener(()=>{


  console.log(
    "📦 LIBRASTUBE instalado."
  );


});






chrome.runtime.onMessage.addListener(


  (
    message,
    sender,
    sendResponse

  )=>{


    console.log(
      "📨 Mensagem recebida:",
      message
    );



    if(
      message.type === "FETCH_SUBTITLE"
    ){



      console.log(
        "🌎 Buscando legenda:"
      );



      console.log(
        message.url
      );




      fetch(

        message.url,

        {

          method:"GET",


          credentials:
            "include",



          headers:{


            "Accept":
              "application/json,text/plain,*/*",


            "Accept-Language":
              "pt-BR,pt;q=0.9",


            "Referer":
              "https://www.youtube.com/",


          }


        }

      )



      .then(

        response=>{


          console.log(
            "📡 Status:",
            response.status
          );



          console.log(
            "📄 Headers:",
            [...response.headers.entries()]
          );



          return response.text();


        }

      )



      .then(

        text=>{


          console.log(
            "📥 Tamanho recebido:",
            text.length
          );



          console.log(
            "📄 Primeiros caracteres:"
          );


          console.log(
            text.substring(0,500)
          );




          sendResponse({

            success:true,

            data:text

          });



        }

      )



      .catch(

        error=>{


          console.error(
            "❌ Erro no fetch:",
            error
          );



          sendResponse({

            success:false,

            error:
              error.message

          });



        }

      );



      return true;

    }


  }

);