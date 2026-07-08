/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Avatar State
 *
 * Responsável por guardar o estado atual
 * do avatar.
 *
 * ==========================================================
 */


let avatarState = {


    currentSign:null,


    status:"idle",


    history:[]


};



export function setAvatarState(data){


    avatarState = {


        ...avatarState,


        ...data


    };



    console.log(
        "🧍 Estado Avatar atualizado:"
    );


    console.log(
        avatarState
    );


}



export function getAvatarState(){


    return avatarState;


}



export function addAvatarHistory(sign){


    avatarState.history.push(sign);


}