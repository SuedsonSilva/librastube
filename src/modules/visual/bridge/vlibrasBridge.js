/**
 * ==========================================================
 * LIBRASTUBE
 *
 * VLibras Bridge
 *
 * Faz a ponte entre o Driver
 * e o Executor.
 *
 * ==========================================================
 */

import { executeAnimation } from "./executor.js";

export function renderSequence(renderPackage) {

    console.log(
        "🌉 Bridge iniciou sequência."
    );

    let index = 0;

    play();

    function play() {

        if (index >= renderPackage.animations.length) {

            console.log(
                "🏁 Sequência finalizada."
            );

            return;

        }

        const animation =
            renderPackage.animations[index];

        executeAnimation(
            animation
        );

        index++;

        setTimeout(

            play,

            animation.duration

        );

    }

}