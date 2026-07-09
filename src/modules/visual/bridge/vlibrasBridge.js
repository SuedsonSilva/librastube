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

    const panel = document.querySelector(
        "#librastube-stage"
    );

    if (!panel) {

        console.warn(
            "Stage não encontrado."
        );

        return;

    }

    let index = 0;

    next();

    function next() {

        if (index >= renderPackage.animations.length) {

            panel.innerHTML = `
                <div class="lt-finished">
                    ✅ Tradução concluída
                </div>
            `;

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

        panel.innerHTML = `

            <div class="lt-sign">

                <div class="lt-word">

                    ${sign.word}

                </div>

                <div class="lt-status">

                    ${sign.status}

                </div>

            </div>

        `;

        index++;

        setTimeout(

            next,

            sign.duration

        );

    }

}