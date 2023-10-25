import { ButtonClose, SvgBtn, Window, Wrap } from './BurgerMenu.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
import LogOutBtn from '../../common/LogOutBtn/LogOutBtn';
import UserNav from '../UserNav/UserNav';
import { createPortal } from 'react-dom';

export default function BurgerMenu({ openedModal, setOpenedModal }) {
  const burgerRoot = document.querySelector('#burger-root');
  return createPortal(
    <Window openedModal={openedModal}>
      <ButtonClose
        onClick={() => {
          setOpenedModal(false);
        }}
      >
        <SvgBtn>
          <use href={`${sprite}#close`}></use>
        </SvgBtn>
      </ButtonClose>

      <UserNav border={'true'} />

      <Wrap>
        <LogOutBtn white={true} />
      </Wrap>
    </Window>,
    burgerRoot,
  );
}
