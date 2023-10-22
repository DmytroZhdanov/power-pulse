import sprite from 'src/assets/images/sprite/sprite.svg';
import { LogoutText, SvgLogout, LogoutButton } from './LogoutBtn.styled';
export default function LogOutBtn(props) {
  console.log(props);
  return (
    <LogoutButton {...props}>
      <LogoutText>Logout</LogoutText>
      <SvgLogout>
        <use href={`${sprite}#logout`}></use>
      </SvgLogout>
    </LogoutButton>
  );
}
