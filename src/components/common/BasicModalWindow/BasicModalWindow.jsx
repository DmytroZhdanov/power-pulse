import { createPortal } from 'react-dom';

export default function BasicModalWindow() {
  const burgerRoot = document.querySelector('#burger-root');

  const modalRoot = document.querySelector('#modal-root');

  return createPortal(<div>BasicModalWindow component</div>, modalRoot);
}
