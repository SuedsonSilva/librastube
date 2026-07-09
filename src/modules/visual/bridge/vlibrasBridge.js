/**
 * ==========================================================
 * LIBRASTUBE
 *
 * VLibras Bridge
 *
 * ==========================================================
 */

import { buildCommand } from "./commandBuilder.js";

import { executeCommand } from "./executor.js";

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

        const command =
            buildCommand(animation);

        executeCommand(command);

        index++;

        setTimeout(

            play,

            animation.duration

        );

    }

}