/**
 * Global state object that holds all current modal information.
 * Includes modal reference, content and placeholder tracking, and state flags.
 *
 * @typedef {Object} ModalState
 * @property {string} modalId - The ID of the content element used in the modal.
 * @property {HTMLElement|null} contentEl - The content DOM element currently inside the modal.
 * @property {HTMLElement|null} modalEl - The DOM element of the modal container.
 * @property {HTMLElement|null} placeholderEl - A placeholder to track original DOM location.
 * @property {boolean} isOpen - Whether the modal is currently visible (shown to the user).
 * @property {boolean} isContentMoved - Whether the content was successfully moved to the modal.
 * @property {boolean} isLocked - Prevents multiple interactions (e.g. during animation).
 * @property {boolean} isOpening - Indicates if the modal is in the process of opening.
 * @property {boolean} isClosing - Indicates if the modal is in the process of closing.
 */
export const modalState = {
    modalID: '',
    contentEl: null,
    modalEl: null,
    placeholderEl: null,
    isOpen: false,
    isContentMoved: false,
    isLocked: false,
    isOpening: false,
    isClosing: false,
}

/**
 * Updates modal state by merging in specified fields.
 *
 * @param {{isLocked: boolean}} updateValue - An object with keys to update in the modal state.
 * @returns {void}
 */
export function setModalState(updateValue) {
    Object.assign(modalState, updateValue)
}
