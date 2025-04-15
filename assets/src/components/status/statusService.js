import createStatusController from './statusController'
import { toggleModalElementsVisibility } from '../../helpers/helpers'

/**
 * Attaches status controller to the modal if content has `data-form`.
 *
 * @param {HTMLElement} modal
 * @param {HTMLElement} contentEl
 */
export function applyStatusHandlers(modal, contentEl) {
    if (!contentEl.dataset.form) return

    const controller = createStatusController(modal)

    modal.setSuccess = controller.setSuccess
    modal.setError = controller.setError
    modal.showStatus = controller.showStatus
}

/**
 * Closes the currently active status message in the modal and restores the original modal view.
 *
 * This function removes the `.modal-status-message` element from the modal with a fade-out animation,
 * and then reveals the main content and controls of the modal again by toggling visibility classes.
 *
 * Intended to be used when the user wants to return to the form after a status message has been shown.
 *
 * @param {HTMLElement} modal - The modal DOM element that contains the status message and main content.
 * @returns {void}
 */
export function closeStatus(modal) {
    const statusMsg = modal.querySelector('.modal-status-message')
    if (!statusMsg) return

    statusMsg.classList.remove('visible')

    setTimeout(() => {
        statusMsg.remove()
        toggleModalElementsVisibility(modal, false)
    }, 300)
}
