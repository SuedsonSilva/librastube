/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Visual Styles
 *
 * Responsável pelo CSS do Stage
 *
 * ==========================================================
 */


export function injectVisualStyles(){


    if(
        document.querySelector(
            "#librastube-visual-style"
        )
    ){

        return;

    }



    const style =
    document.createElement(
        "style"
    );


    style.id =
        "librastube-visual-style";



    style.textContent = `


    #librastube-stage {


        position: fixed;


        right: 30px;

        bottom: 80px;


        width: 260px;


        background:
        rgba(20,20,20,0.85);



        color:white;


        border-radius:20px;


        padding:20px;


        z-index:999999;



        font-family:
        Arial, sans-serif;



        box-shadow:
        0 0 20px rgba(0,0,0,.5);



        backdrop-filter:
        blur(8px);


    }



    .stage-title{


        font-size:20px;


        font-weight:bold;


        text-align:center;


        margin-bottom:20px;


    }



    .stage-content{


        text-align:center;


    }



    #current-sign{


        display:block;


        font-size:30px;


        margin:20px 0;


    }



    #stage-status{


        opacity:.8;


    }



    `;



    document.head.appendChild(
        style
    );


}