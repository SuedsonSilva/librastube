/**
 * ==========================================================
 * LIBRASTUBE
 *
 * VLibras Bridge
 *
 * Responsável por conversar com
 * o plugin do VLibras.
 *
 * ==========================================================
 */

let container = null;

export function initializeVLibrasBridge() {

    console.log(
        "🌉 Inicializando ponte do VLibras..."
    );

    container = document.querySelector(
        "#vw-plugin-wrapper"
    );

    if (container) {

        console.log(
            "✅ VLibras encontrado na página."
        );

    } else {

        console.log(
            "⚠️ VLibras ainda não encontrado."
        );

    }

}

export function getVLibrasContainer() {

    return container;

}