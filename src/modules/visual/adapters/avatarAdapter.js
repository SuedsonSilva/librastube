/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Avatar Adapter
 *
 * ==========================================================
 */

import { enqueue } from "../queue.js";

import { resolveSign } from "../../signs/resolver.js";

export function playSigns(signs) {

    console.log(
        "🧩 Avatar Adapter recebeu sinais."
    );

    if (!Array.isArray(signs)) {

        return;

    }

    signs.forEach(sign => {

        const resolved = resolveSign(sign);

        console.log(
            "🎯 Sinal resolvido:"
        );

        console.log(resolved);

        enqueue(resolved);

    });

}