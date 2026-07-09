/**
 * ==========================================================
 * LIBRASTUBE
 *
 * Drivers
 *
 * ==========================================================
 */

import {

    initializeVLibrasBridge

} from "./vlibrasBridge.js";

import {

    render,

    setDriver,

    getDriver

} from "./driverManager.js";



export function initializeDrivers(){

    initializeVLibrasBridge();

}



export {

    render,

    setDriver,

    getDriver

};