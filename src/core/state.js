/**
 * ==========================================================
 * LIBRASTUBE
 * Application State
 *
 * Estado global da aplicação
 * ==========================================================
 */


let state = {

    translationActive: false,

    currentVideo: null,

    currentSubtitle: null

};



export function setState(changes){


    state = {

        ...state,

        ...changes

    };


    console.log(
        "🧠 Estado atualizado:",
        state
    );


}



export function getState(){

    return state;

}