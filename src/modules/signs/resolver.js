/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Sign Resolver
 *
 * Responsável por transformar um sinal
 * simples em um objeto pronto para
 * reprodução.
 *
 * ==========================================================
 */

export function resolveSign(sign) {

    console.log(
        "🧩 Resolver recebeu:"
    );

    console.log(sign);

    /*
    ==========================================
    Palavra sem sinal encontrado
    ==========================================
    */

    if (!sign || sign.status === "missing") {

        return {

            id: null,

            word: sign?.word ?? "",

            animation: null,

            duration: 800,

            facial: "neutral",

            hands: 2,

            speed: 1,

            status: "missing"

        };

    }

    /*
    ==========================================
    Palavra encontrada
    ==========================================
    */

    return {

        id: sign.signal,

        word: sign.word,

        animation: sign.signal,

        duration: 800,

        facial: "neutral",

        hands: 2,

        speed: 1,

        status: "found"

    };

}