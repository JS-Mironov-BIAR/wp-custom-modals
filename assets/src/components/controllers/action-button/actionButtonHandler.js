import handleModalTrigger from './actionButtonEvents'

/**
 * Initializes the click event listener for a single action button.
 * Delegates the event to the modal trigger handler.
 *
 * @param {HTMLElement} actionButton - The button element to bind the click event to.
 * @returns {void}
 */
export default function initActionButtonHandler(actionButton) {
    actionButton.addEventListener('click', (e) => handleModalTrigger(e, actionButton))
}
