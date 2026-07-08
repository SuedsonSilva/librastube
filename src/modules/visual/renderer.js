/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Renderer
 *
 * Responsável por:
 * - receber a estrutura de sinais
 * - colocar na fila do Player
 * - devolver os sinais para o Visual Engine
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
    ==========================================
    Envia todos os sinais para a fila
    ==========================================
    */

    signs.forEach(sign => {

        console.log(
            "📥 Sinal entrou na fila:"
        );

        console.log(sign);

        enqueue(sign);

    });

    /*
    ==========================================
    Devolve a sequência para quem chamou.
    ==========================================
    */

    return signs;

}