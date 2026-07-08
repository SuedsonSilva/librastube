/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Avatar Adapter
 *
 * Responsável por enviar sinais
 * para o Avatar.
 *
 * ==========================================================
 */

import { enqueue } from "../queue.js";

export function playSigns(signs) {

    console.log(
        "🧩 Avatar Adapter recebeu sinais."
    );

    if (!Array.isArray(signs)) {

        console.warn(
            "⚠️ Lista de sinais inválida."
        );

        return;

    }

    signs.forEach(sign => {

        enqueue(sign);

    });

}