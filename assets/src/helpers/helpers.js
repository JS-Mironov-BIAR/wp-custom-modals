/**
 * Creates a button element with specified label, classes, icon, and click behavior.
 *
 * @param {string} label - A11y label for the button.
 * @param {string[]|string} className - Class or list of classes to apply to the button.
 * @param {string} iconSvg - Inline SVG markup string.
 * @param {Function} callback - Click event handler.
 * @returns {HTMLButtonElement} The generated button element.
 */
export default function createButton(label, className, iconSvg, callback) {
    const button = document.createElement('button')
    button.classList.add(className)
    button.innerHTML = iconSvg

    button.addEventListener('click', (e) => {
        e.preventDefault()
        callback()
    })

    return button
}

/**
 * Toggles soft visibility class on modal content & controllers.
 * @param {HTMLElement} modal
 * @param {boolean} hidden - true = hide, false = show
 */
export function toggleModalElementsVisibility(modal, hidden = true) {
    const content = modal.querySelector('.modal-container__content')
    const controls = modal.querySelector('.modal-container__controllers')

    if (content) content.classList.toggle('hidden', hidden)
    if (controls) controls.classList.toggle('hidden', hidden)
}
