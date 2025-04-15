import initActionButtons from './events'
// Ensure ModalAPI is globally available for external usage
import './global'

/**
 * Entry point: initializes all modal triggers when DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
    initActionButtons()
})
