import { createPortal } from 'react-dom';

export default function BasicModalWindow(props) {
  const { isOpen, onClose, children } = props;

  if (!isOpen) {
    return null; // Не отображаем модальное окно, если isOpen === false
  }

  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <div>
      {children}
      <button onClick={onClose}>Закрыть</button>
    </div>,
    modalRoot,
  );
}
