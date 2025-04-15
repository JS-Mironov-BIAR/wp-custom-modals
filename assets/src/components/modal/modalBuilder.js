import initModalHandler from './modalHandler'
import { setModalState } from './modalState'

/**
 * Builds a modal window and injects provided content.
 * Updates modal state and initializes event handling.
 *
 * @param {HTMLElement} contentEl - The DOM element to be moved into the modal.
 * @returns {HTMLElement|null} The created modal element or null if one already exists.
 */
export default function buildModal(contentEl) {
    const isModal = document.querySelector('.modal-container')
    if (isModal) return null

    // add main wrapper
    const modal = document.createElement('div')
    modal.classList.add('modal-container', 'modal-wrapper')
    modal.setAttribute('role', 'dialog')
    modal.setAttribute('aria-modal', 'true')
    modal.setAttribute('aria-label', 'Modal window')

    // add wrapper for content & controls
    const dialog = document.createElement('div')
    dialog.classList.add('modal-container__dialog')

    // add controllers container
    const controls = document.createElement('div')
    controls.classList.add('modal-container__controllers')

    // add content container
    const contentWrapper = document.createElement('div')
    contentWrapper.classList.add('modal-container__content')
    contentWrapper.appendChild(contentEl)

    dialog.append(controls, contentWrapper)
    modal.appendChild(dialog)

    document.body.appendChild(modal)

    initModalHandler(modal)

    // When the content is moved in modal
    setModalState({ isContentMoved: true })

    return modal
}
