import STATUS_PRESETS from './statusPresets'
import createStatusMessage from './statusMessage'
import { closeModal } from '../modal/modalEvents'
import { toggleModalElementsVisibility } from '../../helpers/helpers'

/**
 * Returns an object with status control methods.
 *
 * @param {HTMLElement} modal - The modal DOM element.
 * @returns {{ showStatus: Function, setSuccess: Function, setError: Function }}
 */
export default function createStatusController(modal) {
    /**
     * Shows a status message and hides modal content/controllers.
     * @param {Object} config - Status config (icon, title, description, buttons).
     */
    function showStatus(config) {
        const existing = modal.querySelector('.modal-status-message')
        if (existing) existing.remove()

        toggleModalElementsVisibility(modal, true)

        const msg = createStatusMessage(config)
        modal.querySelector('.modal-container__dialog')?.appendChild(msg)

        setTimeout(() => msg.classList.add('visible'), 20)
    }

    /**
     * Shows a success message with optional overrides.
     * @param {Object} [override={}]
     */
    function setSuccess(override = {}) {
        const preset = STATUS_PRESETS.success
        const buttons =
            override.buttons ||
            preset.buttons.map((btn) => ({
                ...btn,
                action: () => btn.action({ modal, closeModal }),
            }))
        showStatus({ ...preset, ...override, buttons })
    }

    /**
     * Shows an error message with optional overrides.
     * @param {Object} [override={}]
     */
    function setError(override = {}) {
        const preset = STATUS_PRESETS.error
        const buttons =
            override.buttons ||
            preset.buttons.map((btn) => ({
                ...btn,
                action: () => btn.action({ modal, closeModal }),
            }))
        showStatus({ ...preset, ...override, buttons })
    }

    return { showStatus, setSuccess, setError }
}
