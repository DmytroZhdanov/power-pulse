import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  CloseModalButton,
  CloseModalIcon,
  Modal,
  ModalBackdrop,
} from './BasicModalWindow.styled';

export default function BasicModalWindow(props) {
  const { onShow = true, onClose, children } = props;
  const modalRoot = document.querySelector('#modal-root');

  const nodeModalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!onShow) return;

    const bodyScroll = disable => {
      document.body.style.overflow = disable ? 'hidden' : 'auto';
    };

    if (onShow || modalRoot.children.length !== 0) {
      bodyScroll(true);
    }

    const onEscKeyPress = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscKeyPress);

    return () => {
      bodyScroll(false);
      window.removeEventListener('keydown', onEscKeyPress);
    };
  }, [modalRoot.children.length, onShow, onClose]);

  return createPortal(
    <>
      <CSSTransition
        in={onShow}
        nodeRef={backdropRef}
        timeout={400}
        classNames="backdrop-wrapper"
        unmountOnExit
      >
        <ModalBackdrop onClick={onClose} ref={backdropRef} />
      </CSSTransition>
      <CSSTransition
        in={onShow}
        nodeRef={nodeModalRef}
        timeout={400}
        classNames="modal-wrapper"
        unmountOnExit
      >
        <Modal ref={nodeModalRef}>
          <CloseModalButton onClick={onClose}>
            <CloseModalIcon width={26} height={26}>
              <use href={`${sprite}#close`}></use>
            </CloseModalIcon>
          </CloseModalButton>
          {children}
        </Modal>
      </CSSTransition>
    </>,
    modalRoot,
  );
}

BasicModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onShow: PropTypes.bool,
};
