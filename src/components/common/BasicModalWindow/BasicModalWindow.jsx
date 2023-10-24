import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  CloseModalButton,
  CloseModalIcon,
  Modal,
  ModalBackdrop,
} from './BasicModalWindow.styled';

export default function BasicModalWindow(props) {
  const { onClose, children } = props;
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const onEscKeyPress = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscKeyPress);

    return () => {
      window.removeEventListener('keydown', onEscKeyPress);
    };
  }, [onClose]);

  return createPortal(
    <>
      <ModalBackdrop onClick={onClose} />
      <Modal>
        <CloseModalButton onClick={onClose}>
          <CloseModalIcon width={26} height={26}>
            <use href={`${sprite}#close`}></use>
          </CloseModalIcon>
        </CloseModalButton>
        {children}
      </Modal>
    </>,
    modalRoot,
  );
}
