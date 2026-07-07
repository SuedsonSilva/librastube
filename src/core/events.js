/**
 * ==========================================================
 * LIBRASTUBE
 * Sistema interno de eventos
 * ==========================================================
 */


const listeners = {};


/**
 * Registrar alguém interessado em um evento
 */
export function on(eventName, callback) {

  if (!listeners[eventName]) {
    listeners[eventName] = [];
  }


  listeners[eventName].push(callback);

}


/**
 * Disparar um evento
 */
export function emit(eventName, data) {

  if (!listeners[eventName]) {
    return;
  }


  listeners[eventName].forEach(callback => {

    callback(data);

  });

}