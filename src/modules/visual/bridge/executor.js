/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Executor
 *
 * Responsável por executar qualquer
 * Render Package recebido pela Bridge.
 *
 * Hoje:
 *   - Atualiza o painel Debug.
 *
 * Amanhã:
 *   - Controlará o VLibras.
 *
 * ==========================================================
 */

export function executeAnimation(animation) {

    console.log(
        "🎬 Executor recebeu:",
        animation.word
    );

    const current =
        document.querySelector("#lt-current");

    if (!current) return;

    current.innerHTML = `
        <strong>▶ Executando</strong>

        <div style="
            margin-top:10px;
            font-size:32px;
            font-weight:bold;
            color:#00ff99;
            text-align:center;
        ">
            ${animation.word}
        </div>
    `;

}