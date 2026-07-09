/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Carregador do Widget Oficial VLibras
 *
 * ==========================================================
 */

let loaded = false;

export function loadVLibras() {

    if (loaded) {

        console.log(
            "✅ VLibras já carregado."
        );

        return;

    }

    console.log(
        "⬇️ Carregando Widget VLibras..."
    );

    const script = document.createElement("script");

    script.src =
        "https://vlibras.gov.br/app/vlibras-plugin.js";

    script.onload = () => {

        console.log(
            "✅ Script VLibras carregado."
        );

        new window.VLibras.Widget(

            "https://vlibras.gov.br/app"

        );

        loaded = true;

        console.log(
            "🤟 Widget VLibras iniciado."
        );

    };

    script.onerror = () => {

        console.log(
            "❌ Erro ao carregar VLibras."
        );

    };

    document.body.appendChild(script);

}