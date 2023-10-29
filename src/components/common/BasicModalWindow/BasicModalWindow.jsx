import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
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
  const backdropRef = useRef(null);
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

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

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const defaultStyle = {
    transition: `opacity ${({ theme }) => theme.transition.main}`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return createPortal(
    <>
      <Transition
        in={isOpen}
        nodeRef={backdropRef}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <ModalBackdrop
            ref={backdropRef}
            onClick={handleClose}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>
      <Transition
        in={isOpen}
        nodeRef={contentRef}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <Modal
            ref={contentRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <CloseModalButton onClick={handleClose}>
              <CloseModalIcon width={26} height={26}>
                <use href={`${sprite}#close`}></use>
              </CloseModalIcon>
            </CloseModalButton>
            {children}
          </Modal>
        )}
      </Transition>
    </>,
    modalRoot,
  );
}

BasicModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
