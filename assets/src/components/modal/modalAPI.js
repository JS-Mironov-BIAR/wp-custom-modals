import { modalState } from './modalState'

const STATUS = {
    setSuccess(config = {}) {
        modalState.modalEl?.setSuccess?.(config)
    },

    setError(config = {}) {
        modalState.modalEl?.setError?.(config)
    },
}

/* const actionModal = {
    lock() {
        setModalState({ isLocked: true })
    },

    unlock() {
        setModalState({ isLocked: false })
    },

    getState() {
        return { ...modalState }
    },

    open(id) {
        const button = document.querySelector(`.action-button[data-name="${id}"]`)
        if (button) {
            button.click()
        } else {
            console.warn(`ModalAPI: элемент с data-name="${id}" не найден`)
        }
    },

    close() {
        if (modalState.modalEl) closeModal()
    },
} */

export default STATUS
