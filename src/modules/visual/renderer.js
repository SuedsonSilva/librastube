/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Renderer
 *
 * Responsável por:
 * - receber os sinais
 * - colocar na fila do Player
 *
 * Não executa animações.
 * Não controla Avatar.
 * Apenas alimenta a fila.
 *
 * ==========================================================
 */

import { enqueue } from "./queue.js";

export function renderSigns(signs) {

    console.log(
        "🎨 Renderer recebeu:"
    );

    console.table(signs);

    /*
    ==================================================
    Segurança
    ==================================================
    */

    if (!Array.isArray(signs)) {

        console.error(
            "❌ Renderer recebeu algo inválido:",
            signs
        );

        return;

    }

    /*
    ==================================================
    Coloca cada sinal na fila.
    ==================================================
    */

    signs.forEach(sign => {

        console.log(
            "📥 Sinal entrou na fila:"
        );

        console.log(sign);

        enqueue(sign);

    });

}