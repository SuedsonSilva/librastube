/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Subtitle Debugger
 *
 * ==========================================================
 */

import {
  getPlayerCaptions
} from "./providers/youtubePlayer.js";

import {
  parseSubtitleData
} from "./parser.js";



async function testFormat(baseUrl, format) {

  const url = baseUrl + "&fmt=" + format;

  console.log("====================================");
  console.log("🧪 Testando formato:", format);
  console.log(url);

  try {

    const response = await fetch(url);

    console.log("📡 Status:", response.status);

    console.log(
      "📦 Content-Type:",
      response.headers.get("content-type")
    );

    const text = await response.text();

    console.log("📏 Tamanho:", text.length);

    console.log(
      "📄 Primeiros 200 caracteres:"
    );

    console.log(
      JSON.stringify(
        text.substring(0, 200)
      )
    );

    if (format === "json3" && text.length > 0) {

      console.log(
        "🔎 Testando parser..."
      );

      parseSubtitleData(text);

    }

  } catch (error) {

    console.error(
      "❌ Erro:",
      error
    );

  }

}





export async function initializeSubtitleModule() {

  console.log(
    "📝 Subtitle Module iniciado."
  );

  console.log(
    "🎬 Buscando legenda pelo player..."
  );

  const captions = getPlayerCaptions();

  if (!captions) {

    console.log(
      "⚠️ Nenhuma legenda encontrada."
    );

    return;

  }

  const track = captions[0];

  console.log(
    "📚 Track selecionada:"
  );

  console.log(track);

  await testFormat(track.baseUrl, "json3");

  await testFormat(track.baseUrl, "srv3");

  await testFormat(track.baseUrl, "vtt");

  await testFormat(track.baseUrl, "xml");

}