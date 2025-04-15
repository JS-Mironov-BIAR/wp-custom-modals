/**
 * @param {{
 *   type: 'success' | 'error',
 *   icon?: string,
 *   title?: string,
 *   description?: string,
 *   buttons?: false | Array<{ label: string, type?: string, action: Function }>
 * }} config
 * @returns {HTMLElement}
 */
export default function createStatusMessage(config) {
    const { type, icon = '', title = '', description = '', buttons = [] } = config

    const wrapper = document.createElement('div')
    wrapper.classList.add('modal-status-message', `modal-status-message--${type}`)
    wrapper.setAttribute('role', 'alert')

    if (icon) {
        const iconEl = document.createElement('div')
        iconEl.classList.add('modal-status-message__icon')
        iconEl.innerHTML = icon
        wrapper.appendChild(iconEl)
    }

    if (title) {
        const titleEl = document.createElement('div')
        titleEl.classList.add('modal-status-message__title')
        titleEl.textContent = title
        wrapper.appendChild(titleEl)
    }

    if (description) {
        const descEl = document.createElement('div')
        descEl.classList.add('modal-status-message__description')
        descEl.textContent = description
        wrapper.appendChild(descEl)
    }

    if (buttons && Array.isArray(buttons)) {
        const btnWrapper = document.createElement('div')
        btnWrapper.classList.add('modal-status-message__buttons')

        buttons.forEach(({ label, action, type = 'primary' }) => {
            if (!label || typeof action !== 'function') return

            const btn = document.createElement('button')
            btn.classList.add('modal-status-message__button', `modal-status-message__button--${type}`)
            btn.textContent = label
            btn.addEventListener('click', () => action())

            btnWrapper.appendChild(btn)
        })

        wrapper.appendChild(btnWrapper)
    }

    return wrapper
}
