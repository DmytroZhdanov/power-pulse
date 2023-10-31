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

export default function BurgerMenu({ openedModal, setOpenedModal }) {
  const burgerRoot = document.querySelector('#burger-root');

  return createPortal(
    <WindowDiv openedModal={openedModal}>
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
        border={true}
      />

      <WrapDiv>
        <LogOutBtn white={true} />
      </WrapDiv>
    </WindowDiv>,
    burgerRoot,
  );
}

BurgerMenu.propTypes = {
  openedModal: PropTypes.bool.isRequired,
  setOpenedModal: PropTypes.func.isRequired,
};
