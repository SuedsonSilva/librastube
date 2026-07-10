/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Stage
 *
 * ==========================================================
 */

import { initializeRenderEngine } from "./renderEngine.js";

let stage;

export function createStage(){

    if(document.querySelector("#librastube-stage")){

        stage =
            document.querySelector(
                "#librastube-stage"
            );

        return stage;

    }

    stage =
        document.createElement("div");

    stage.id =
        "librastube-stage";

    Object.assign(stage.style,{

        position:"fixed",

        bottom:"30px",

        right:"30px",

        width:"340px",

        height:"340px",

        background:"#181818",

        border:"2px solid #00ff99",

        borderRadius:"16px",

        zIndex:999999,

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        overflow:"hidden"

    });

    const avatar =
        document.createElement("div");

    avatar.id =
        "librastube-avatar";

    avatar.innerHTML="🤟";

    avatar.style.fontSize="120px";

    stage.appendChild(
        avatar
    );

    document.body.appendChild(
        stage
    );

    initializeRenderEngine();

    console.log(
        "🎭 Stage criado."
    );

    return stage;

}