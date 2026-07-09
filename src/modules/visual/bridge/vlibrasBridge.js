/**
 * ==========================================================
 * LIBRASTUBE
 *
 * VLibras Bridge
 *
 * Executor visual temporário.
 *
 * ==========================================================
 */

export function renderSequence(renderPackage) {

    console.log("🎬 Iniciando sequência visual...");

    const animations = renderPackage.animations;

    let index = 0;

    play();

    function play() {

        if (index >= animations.length) {

            console.log("🏁 Sequência finalizada.");

            updateCurrent("✔ Finalizado");

            return;

        }

        const sign = animations[index];

        console.log("🤟", sign.word);

        updateCurrent(sign.word);

        index++;

        setTimeout(play, sign.duration);

    }

}

function updateCurrent(word) {

    const current = document.querySelector("#lt-current");

    if (!current) return;

    current.textContent = "Atual: " + word;

}