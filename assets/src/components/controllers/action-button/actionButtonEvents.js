import buildModal from '../../modal/modalBuilder'
import buttonClose from '../closeButton'
import bodyScrollStop from '../../ui'
import { modalState, setModalState } from '../../modal/modalState'
import { extractContentEl, restoreContentEl } from '../../modal/modalProcessing'
import { applyStatusHandlers } from '../../status/statusService'

/**
 * Handles the click event for action buttons that trigger modals.
 * Extracts content, creates the modal, appends close button, updates state.
 *
 * @param {MouseEvent} e - The click event object.
 * @param {HTMLElement} button - The action button that was clicked.
 * @returns {void}
 */
export default function handleModalTrigger(e, button) {
    e.preventDefault()

    if (modalState.isOpen) return

    setModalState({ isLocked: true })

    setTimeout(() => setModalState({ isLocked: false }), 1500)

    const selector = button.dataset.name
    const { contentEl, placeholderEl } = extractContentEl(selector)
    const modalEl = buildModal(contentEl)

    if (!modalEl) {
        restoreContentEl(contentEl, placeholderEl)
        setModalState({ isOpening: false })
        return
    }

    if (modalEl) {
        if (contentEl?.dataset?.form === 'true') {
            applyStatusHandlers(modalEl, contentEl)
        }

        setModalState({
            modalId: selector,
            contentEl,
            modalEl,
            placeholderEl,
            isOpen: true,
        })

        modalEl.querySelector('.modal-container__controllers')?.append(buttonClose())

        setTimeout(() => {
            if (modalState.isContentMoved) {
                modalEl.classList.add('show')

                setModalState({ isOpening: false })
            }
        }, 100)

        bodyScrollStop(true)
    } else {
        setModalState({ isOpening: false })
    }
}
