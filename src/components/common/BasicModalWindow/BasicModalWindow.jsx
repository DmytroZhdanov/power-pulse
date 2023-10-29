import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
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

    const bodyScroll = disable => {
      document.body.style.overflow = disable ? 'hidden' : 'auto';
    };

    window.addEventListener('keydown', onEscKeyPress);
    bodyScroll(true);

    return () => {
      window.removeEventListener('keydown', onEscKeyPress);
      bodyScroll(false);
    };
  }, [onClose]);

  return createPortal(
    <>
      <ModalBackdrop
        onClick={onClose}
      />
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

BasicModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
