import { outsideModal } from './modalEvents'

export default function initModalHandler(actionButton) {
    actionButton.addEventListener('click', (e) => outsideModal(e))
}
