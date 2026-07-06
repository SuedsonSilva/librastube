/**
 * ==========================================================
 * LIBRASTUBE
 * Sistema simples de eventos
 * ==========================================================
 */


const events = {};


export function on(eventName, callback){

  if(!events[eventName]){
    events[eventName] = [];
  }


  events[eventName].push(callback);

}



export function emit(eventName, data){

  if(!events[eventName]) return;


  events[eventName].forEach(callback => {

    callback(data);

  });

}