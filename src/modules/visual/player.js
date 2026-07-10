import "./hud.css";

let hud;

export function createHUD(){

    if(document.querySelector("#librastube-hud")) return;

    hud = document.createElement("div");

    hud.id="librastube-hud";

    hud.innerHTML=`

        <div id="librastube-avatar">🤟</div>

        <div id="lt-word">--</div>

        <hr>

        <div id="lt-original">Original:</div>

        <div id="lt-gloss">Gloss:</div>

        <div id="lt-status">🟢 Pronto</div>

        <div id="lt-footer">LibrasTube</div>

    `;

    document.body.appendChild(hud);

}

export function updateHUD(data){

    document.querySelector("#lt-word").textContent =
        data.word ?? "--";

    document.querySelector("#lt-original").textContent =
        "Original: " + (data.original ?? "-");

    document.querySelector("#lt-gloss").textContent =
        "Gloss: " + (data.gloss ?? "-");

    document.querySelector("#lt-status").textContent =
        data.status ?? "🟢";
}