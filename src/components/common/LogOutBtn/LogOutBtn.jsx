import sprite from '../../../assets/images/sprite/sprite.svg';
import { LogoutText, SvgLogout, LogoutButton } from './LogoutBtn.styled';
export default function LogOutBtn() {
  return (
    <LogoutButton>
      <LogoutText>Logout</LogoutText>
      <SvgLogout>
        <use href={`${sprite}#logout`}></use>
      </SvgLogout>
    </LogoutButton>
  );
}
