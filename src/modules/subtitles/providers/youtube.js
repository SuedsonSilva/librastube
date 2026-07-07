/**
 * ==========================================================
 * LIBRASTUBE
 *
 * YouTube Subtitle Extractor
 *
 * Responsável por:
 * - encontrar as legendas do YouTube
 * - pegar a URL da legenda
 * - baixar o conteúdo da legenda
 * - analisar a resposta recebida
 * - avisar o restante da aplicação
 *
 * ==========================================================
 */

import { emit } from "../../../core/events.js";

/**
 * Procura as informações de legenda
 * dentro dos scripts carregados pelo YouTube
 */
export function getYouTubeCaptionUrl() {

  const scripts = [
    ...document.querySelectorAll("script")
  ];

  for (const script of scripts) {

    const text = script.textContent;

    if (text.includes("captionTracks")) {

      console.log(
        "📝 Dados de legenda encontrados"
      );

      const match = text.match(
        /"captionTracks":(\[.*?\])/s
      );

      if (!match) {

        console.log(
          "⚠️ Não conseguiu extrair captionTracks"
        );

        emit(
          "SUBTITLE_STATUS_CHANGED",
          {
            available: false
          }
        );

        return null;

      }

      const captions = JSON.parse(
        match[1]
      );

      const captionUrl =
        captions[0].baseUrl;

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

  emit(
    "SUBTITLE_STATUS_CHANGED",
    {
      available: false
    }
  );

  return null;

}

/**
 * Baixa o arquivo de legenda
 */
export async function fetchSubtitle(url) {

  try {

    const response = await fetch(url);

    console.log(
      "📡 Status da legenda:",
      response.status
    );

    const xml = await response.text();

    console.log(
      "📥 Legenda baixada"
    );

    console.log(
      "📄 Conteúdo recebido:"
    );

    console.log(
      xml.substring(0, 500)
    );

    emit(
      "SUBTITLE_STATUS_CHANGED",
      {
        available: true,
        xml
      }
    );

    return xml;

  } catch (error) {

    console.error(
      "❌ Erro ao baixar legenda:",
      error
    );

    emit(
      "SUBTITLE_STATUS_CHANGED",
      {
        available: false
      }
    );

    return null;

  }

}