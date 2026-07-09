/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Sentence Builder
 *
 * Responsável por montar a estrutura final
 * que será enviada ao renderizador.
 *
 * Futuramente esta camada poderá aplicar:
 *
 * • IA
 * • Contexto
 * • Regras avançadas de Libras
 * • Correção gramatical
 * • Gloss oficial
 *
 * ==========================================================
 */

export function buildSentence(original, signs) {

    console.log(
        "🧠 Sentence Builder recebeu:"
    );

    console.log(signs);

    return {

        original,

        gloss: signs
            .map(sign => sign.word)
            .join(" "),

        signs,

        createdAt: Date.now()

    };

}