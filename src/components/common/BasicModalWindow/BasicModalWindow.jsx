import { createPortal } from 'react-dom';

export default function BasicModalWindow(props) {
  const { onClose, children } = props;

  //  if (!isOpen) {
  //    return null; // Не отображаем модальное окно, если isOpen === false
  //  }

  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <>
      <button onClick={onClose}>X</button>
      {children}
    </>,
    modalRoot,
  );
}
