/**
 * ==========================================================
 * LIBRASTUBE
 *
 * VLibras Bridge
 *
 * Simula a execução do renderizador.
 *
 * ==========================================================
 */

export function renderSequence(renderPackage) {

    console.log(
        "🎬 Executando sequência..."
    );

    console.table(
        renderPackage.animations
    );

    let index = 0;

    playNext();

    function playNext() {

        if(index >= renderPackage.animations.length){

            console.log(
                "🏁 Sequência finalizada."
            );

            return;

        }

        const sign =
            renderPackage.animations[index];

        console.log(
            "🤟 Executando:",
            sign.word
        );

        updatePanel(
            sign.word
        );

        index++;

        setTimeout(

            playNext,

            sign.duration

        );

    }

}

function updatePanel(word){

    const panel =
        document.querySelector(
            "#librastube-debug-current"
        );

    if(panel){

        panel.textContent =
            word;

    }

}