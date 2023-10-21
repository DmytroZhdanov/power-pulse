import {
  ButtonClose,
  SvgBtn,
  Window,
  LogoutButtonBurg,
  SvgLogoutBurg,
  LogoutTextBurg,
} from './BurgerMenu.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function BurgerMenu({ children, openedModal, setOpenedModal }) {
  return (
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
      {children}

      <LogoutButtonBurg>
        <LogoutTextBurg>Logout</LogoutTextBurg>
        <SvgLogoutBurg>
          <use href={`${sprite}#logout`}></use>
        </SvgLogoutBurg>
      </LogoutButtonBurg>
    </Window>
  );
}
