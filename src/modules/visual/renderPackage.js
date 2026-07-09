/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Render Package
 *
 * Cria um pacote padronizado para qualquer Driver.
 *
 * ==========================================================
 */

export function buildRenderPackage(signs = []) {

    console.log(
        "📦 Construindo Render Package..."
    );

    if (!Array.isArray(signs)) {

        console.warn(
            "⚠️ RenderPackage recebeu algo inválido."
        );

        return {

            animations: [],

            totalDuration: 0,

            createdAt: Date.now()

        };

    }

    const animations = signs.map(sign => ({

        id: sign.id ?? null,

        word: sign.word,

        animation: sign.animation ?? null,

        duration: sign.duration ?? 800,

        facial: sign.facial ?? "neutral",

        hands: sign.hands ?? "both",

        speed: sign.speed ?? 1,

        status: sign.status ?? "missing"

    }));

    const totalDuration = animations.reduce(

        (total, animation) =>

            total + animation.duration,

        0

    );

    return {

        animations,

        totalDuration,

        createdAt: Date.now()

    };

}