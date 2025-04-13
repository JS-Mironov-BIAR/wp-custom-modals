# 📦 Modal Component — Pure Native JavaScript

A dependency-free modal window module.  
Minimalistic, DOM-controlled, and flexible for integration into any project.

---

## 🚀 Quick Start

### Installation

Clone the repository or install as a module:

```bash
git clone https://github.com/your-name/modal-component.git
```

Or via NPM (if published):

```bash
npm install native-modal-js
```

---

## ⚙️ Usage

### HTML

```html
<a href="#" class="action-button" data-name="popup-id">Open modal</a>

<div id="popup-id" class="modal-hidden" aria-hidden="true">
    <p>Modal window content</p>
</div>
```

### JS

```js
import initActionButtons from './events'

document.addEventListener('DOMContentLoaded', () => {
  initActionButtons()
})
```

---

## 📚 API

### Types

```ts
/**
 * Modal state structure
 */
type ModalState = {
  modalId: string
  contentEl: HTMLElement | null
  modalEl: HTMLElement | null
  placeholderEl: HTMLElement | null
  isOpen: boolean
  isContentMoved: boolean
  isLocked: boolean // prevents multiple triggers or repeated modal calls
  isOpening: boolean // modal is in the process of opening
  isClosing: boolean // modal is in the process of closing (e.g. animation delay)
}
```
```
```

### Classes
| Class                       | Description                              |
|----------------------------|------------------------------------------|
| `.modal-container`         | Modal window wrapper                     |
| `.modal-container__dialog` | Dialog element (main container)          |
| `.modal-container__content`| Main content area                        |
| `.modal-container__controllers` | Control panel (buttons, icons)     |
| `.modal-hidden`            | Hides content before modal is triggered  |

---

### `modalState` Object

```ts
modalState = {
  modalId: string,
  contentEl: HTMLElement | null,
  modalEl: HTMLElement | null,
  placeholderEl: HTMLElement | null,
  isOpen: boolean,
  isContentMoved: boolean,
  isLocked: boolean,
  isOpening: boolean,
  isClosing: boolean
}
```
```
```

---

### Core Functions

| Function                   | Description |
|----------------------------|-------------|
|----------------------------|-------------|
| `buildModal(contentEl)`    | Creates modal and appends content |
| `closeModal()`             | Closes and removes the modal      |
| `extractContentEl(id)`     | Moves content from DOM into modal |
| `restoreContentEl()`       | Returns content to original place |
| `initActionButtons()`      | Initializes all `.action-button` elements |
| `bodyScrollStop(bool)`     | Enables/disables body scroll |
| `waitUntil(conditionFn)`   | Waits until a condition becomes true or times out |
| `setModalState(obj)`       | Updates the modalState object by merging in specified fields |

---

## 🎨 Customization

You can override styles to fit your design. Example:

```css
.modal-container {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
}

.modal-container__content {
    max-width: 600px;
    padding: 30px;
}
```

---

## 📁 Project Structure

```bash
/modal/                  # Core modal logic
  modalState.js          # Global modal state
  modalHandler.js        # Attaches modal event listeners
  modalEvents.js         # Overlay clicks & closing logic
  modalProcessing.js     # Content in/out DOM logic
  modal.js               # Modal DOM creation logic

/components/             # UI components and controls
  controllers/
    action-button/
      actionButtonHandler.js  # Action button binding
      actionButtonEvents.js   # Action button click logic
  closeButton.js         # Close button component

/helpers/                # Utility functions
  helpers.js             # Button generator & utilities

/ui/                     # UI-level behaviors
  scroll.js              # Body scroll lock/unlock
```

---

## ✅ Benefits

- ✅ Zero dependencies
- ✅ Easy to integrate
- ✅ Great performance
- ✅ Clean and readable code
- ✅ Structured for refactoring and testing



