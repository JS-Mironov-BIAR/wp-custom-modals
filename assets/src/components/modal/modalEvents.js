import bodyScrollStop from '../ui'
import { modalState, setModalState } from './modalState'
import { restoreContentEl } from './modalProcessing'

/**
 * Closes the active modal window.
 * Restores content to its original place and resets modal state.
 *
 * @returns {void}
 */
export function closeModal() {
    if (modalState.isOpening || modalState.isClosing) {
        console.warn('⏳ Modal is in transition, skipping close')
        return
    }

    const modalEl = modalState.modalEl
    if (!modalEl) return

    setModalState({ isClosing: true, isLocked: true })

    modalEl.classList.remove('show') // анимация закрытия

    setTimeout(() => setModalState({ isLocked: false }), 1000)

    modalEl.addEventListener(
        'transitionend',
        () => {
            restoreContentEl(modalState.contentEl, modalState.placeholderEl)
            modalEl.remove()

            setModalState({
                modalId: '',
                contentEl: null,
                modalEl: null,
                placeholderEl: null,
                isOpen: false,
                isContentMoved: false,
                isOpening: false,
                isClosing: false,
            })

            bodyScrollStop(false)
        },
        { once: true },
    )
}

/**
 * Handles clicks on the modal overlay.
 * If the click is outside the dialog, triggers modal close.
 *
 * @param {MouseEvent} event - The click event object.
 * @returns {void}
 */
export function outsideModal(event) {
    if (event.target.classList.contains('modal-container')) {
        closeModal()
    }
}
