/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Command Builder
 *
 * Converte uma animação em um comando
 * que qualquer executor poderá entender.
 *
 * ==========================================================
 */

export function buildCommand(animation) {

    return {

        type: "PLAY_SIGN",

        payload: {

            id: animation.id,

            word: animation.word,

            animation: animation.animation,

            facial: animation.facial,

            hands: animation.hands,

            speed: animation.speed,

            duration: animation.duration

        }

    };

}