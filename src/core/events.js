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

    console.log("📌 Registrando listener:", eventName);

    if (!listeners[eventName]) {
        listeners[eventName] = [];
    }

    listeners[eventName].push(callback);

    console.log(
        "👥 Total listeners",
        eventName,
        listeners[eventName].length
    );
}

/**
 * Disparar um evento
 */
export function emit(eventName, data) {

    console.log("📢 Emitindo evento:", eventName);

    if (!listeners[eventName]) {

        console.log("❌ Nenhum listener encontrado para", eventName);

        return;
    }

    console.log(
        "✅ Encontrados",
        listeners[eventName].length,
        "listeners para",
        eventName
    );

    listeners[eventName].forEach(callback => {
        callback(data);
    });
}