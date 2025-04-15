import { closeStatus } from './statusService'

const STATUS_PRESETS = {
    success: {
        type: 'success',
        // eslint-disable-next-line max-len
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="on bbh"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg>`,
        title: 'Успешно!',
        description: 'Спасибо, данные успешно отправлены. Мы свяжемся с вами в ближайшее время!',
        buttons: [
            {
                label: 'Закрыть окно',
                action: ({ closeModal }) => closeModal(),
                type: 'primary',
            },
        ],
    },
    error: {
        type: 'error',
        // eslint-disable-next-line max-len
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="on bcl"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"></path></svg>`,
        title: 'Ошибка!',
        description:
            'При попытке отправить данные произошла ошибка. Перепроверьте вводимые данные и попробуйте ещё раз.',
        buttons: [
            {
                label: 'Вернуться к форме',
                action: ({ modal }) => closeStatus(modal),
                type: 'secondary',
            },
            {
                label: 'Закрыть',
                action: ({ closeModal }) => closeModal(),
                type: 'primary',
            },
        ],
    },
}

export default STATUS_PRESETS
