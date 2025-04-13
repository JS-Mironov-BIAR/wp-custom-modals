import initActionButtonHandler from './components/controllers/action-button/actionButtonHandler'

/**
 * Initializes all action buttons on the page by binding click events.
 * This should be run after DOM content is loaded.
 *
 * @returns {void}
 */
export default function initActionButtons() {
    const actionButtons = document.querySelectorAll('.action-button')

    actionButtons.forEach((actionButton) => initActionButtonHandler(actionButton))
}
