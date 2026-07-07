import { initializeYouTubeProvider } from "../providers/youtube/index.js";
import { initializeSubtitleModule } from "../modules/subtitles/index.js";
import { on } from "./events.js";
import { initializeUI } from "../ui/index.js";


export function startApp(){

  console.log("🚀 LIBRASTUBE iniciado!");


  on(
    "VIDEO_CHANGED",
    (video)=>{

      console.log("📢 Evento recebido:");

      console.table(video);

    }
  );

  initializeUI();

  initializeSubtitleModule();


  initializeYouTubeProvider();

}