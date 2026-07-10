/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Animator
 *
 * Responsável por executar
 * pequenas animações do Stage.
 *
 * Futuramente:
 *
 * ✔ mãos
 * ✔ braços
 * ✔ rosto
 * ✔ corpo
 *
 * ==========================================================
 */

export function animateSign(sign){

    const avatar =
        document.querySelector(
            "#librastube-avatar"
        );

    if(!avatar){

        return;

    }

    avatar.animate(

        [

            {

                transform:"scale(.90)",

                opacity:.6

            },

            {

                transform:"scale(1.08)",

                opacity:1

            },

            {

                transform:"scale(1)"

            }

        ],

        {

            duration:250,

            easing:"ease-out"

        }

    );

}