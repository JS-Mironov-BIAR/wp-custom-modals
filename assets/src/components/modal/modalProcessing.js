/**
 * Restores the content element back to its original position using the placeholder.
 * Updates visibility and accessibility attributes.
 *
 * @param {HTMLElement|null} contentEl - The content element to restore.
 * @param {HTMLElement|null} placeholderEl - The placeholder to replace.
 * @returns {void}
 */
export function restoreContentEl(contentEl, placeholderEl) {
    if (contentEl && placeholderEl && placeholderEl.parentElement) {
        placeholderEl.parentElement.insertBefore(contentEl, placeholderEl)
        placeholderEl.remove()

        contentEl.classList.add('modal-hidden')
        contentEl.setAttribute('aria-hidden', 'true')
    }
}

/**
 * Extracts a DOM element by ID and prepares it for use inside a modal.
 * Makes the element visible and accessible, and creates a placeholder for later restoration.
 *
 * @param {string} selector - The ID of the DOM element to extract.
 * @returns {{ contentEl: HTMLElement|null, placeholderEl: HTMLElement|null }} - The extracted element and a placeholder.
 */
export function extractContentEl(selector) {
    const contentEl = document.querySelector(`#${selector}`)

    if (!contentEl) return { contentEl: null, placeholderEl: null }

    const placeholderEl = document.createElement('div')
    placeholderEl.dataset.id = `ph-${Date.now()}`
    contentEl.parentElement.insertBefore(placeholderEl, contentEl)

    contentEl.classList.remove('modal-hidden')
    contentEl.setAttribute('aria-hidden', 'false')

    return { contentEl, placeholderEl }
}
