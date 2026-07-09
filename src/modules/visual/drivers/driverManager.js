/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Driver Manager
 *
 * Responsável por selecionar qual
 * driver fará a renderização.
 *
 * ==========================================================
 */

import { renderWithVLibras } from "./vlibrasDriver.js";

let currentDriver = "vlibras";

export function setDriver(driver) {

    currentDriver = driver;

    console.log(
        "🚗 Driver alterado:",
        driver
    );

}

export function getDriver() {

    return currentDriver;

}

export function render(signs = []) {

    console.log(
        "🎮 Driver Manager recebeu:"
    );

    console.table(signs);

    switch (currentDriver) {

        case "vlibras":

            return renderWithVLibras(
                signs
            );

        default:

            console.warn(
                "⚠️ Driver inexistente:",
                currentDriver
            );

            return null;

    }

}