/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Scene
 *
 * Responsável por criar e controlar
 * a área onde o avatar será exibido.
 *
 * ==========================================================
 */

let scene = null;

export function createScene() {

    if (scene) {
        return scene;
    }

    scene = document.createElement("div");

    scene.id = "librastube-scene";

    scene.innerHTML = `
        <div id="lt-scene-title">
            🤟 LIBRASTUBE
        </div>

        <div id="lt-avatar-area">

            <div id="lt-avatar-placeholder">
                👤
            </div>

        </div>

        <div id="lt-signs-container">

        </div>
    `;

    document.body.appendChild(scene);

    console.log("🎬 Cena criada.");

    return scene;
}

export function getSignsContainer() {

    return document.querySelector(
        "#lt-signs-container"
    );

}