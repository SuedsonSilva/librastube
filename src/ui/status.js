/**
 * ==================================================
 * LIBRASTUBE
 * UI Status Manager
 * ==================================================
 */

export function updateVideoTitle(title) {

    const element = document.querySelector("#lt-video");

    if (!element) return;

    element.textContent = title;

}

export function updateSubtitleStatus(status) {

    const element = document.querySelector("#lt-subtitle");

    if (!element) return;

    element.textContent = status;

}

export function updateTranslationStatus(status) {

    const element = document.querySelector("#lt-translation");

    if (!element) return;

    element.textContent = status;

}