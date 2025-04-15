import STATUS from './components/modal/modalAPI'
// future imports:
// import FormAPI from './components/form/formAPI'
// import ToastAPI from './components/toast/toastAPI'

/**
 * Registers global plugin interface
 * All APIs exposed via `window.ModalControllers`
 */
window.ModalControllers = {
    Status: STATUS,
    // Form: FormAPI,
    // Toast: ToastAPI,
}

console.info('✅ ModalControllers API initialized:', window.ModalControllers)
