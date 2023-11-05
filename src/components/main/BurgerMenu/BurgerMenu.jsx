import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import UserNav from 'components/main/UserNav/UserNav';
import {
  ButtonCloseDiv,
  SvgBtn,
  WindowDiv,
  WrapDiv,
} from './BurgerMenu.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function BurgerMenu({ setOpenedModal, openedModal }) {
  const burgerRoot = document.querySelector('#burger-root');
  const nodeModalRef = useRef(null);
  return createPortal(
    <CSSTransition
      in={openedModal}
      nodeRef={nodeModalRef}
      timeout={400}
      classNames="modal"
      unmountOnExit
    >
      <WindowDiv ref={nodeModalRef}>
        <ButtonCloseDiv
          onClick={() => {
            setOpenedModal(false);
          }}
        >
          <SvgBtn>
            <use href={`${sprite}#close`}></use>
          </SvgBtn>
        </ButtonCloseDiv>

        <UserNav
          onClick={() => {
            setOpenedModal(false);
          }}
          border={'true'}
        />

        <WrapDiv>
          <LogOutBtn white={true} />
        </WrapDiv>
      </WindowDiv>
    </CSSTransition>,
    burgerRoot,
  );
}

BurgerMenu.propTypes = {
  setOpenedModal: PropTypes.func.isRequired,
};
