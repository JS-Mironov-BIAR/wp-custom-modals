/**
 * Enables or disables body scroll when modal is opened or closed.
 * Applies padding compensation for scrollbar to prevent layout shift.
 *
 * @param {boolean} isStopScroll - True to stop scroll, false to restore it.
 * @returns {void}
 */
export default function bodyScrollStop(isStopScroll) {
    const body = document.body
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

    const bodyStyles = {
        overflow: isStopScroll ? 'hidden' : '',
        paddingRight: isStopScroll ? `${scrollBarWidth}px` : '',
    }

    body.style.overflow = bodyStyles.overflow
    body.style.paddingRight = bodyStyles.paddingRight
}
