import { useDispatch } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { useLogoutMutation } from 'src/redux/api';
import { initialState, setCredentials } from 'src/redux/auth/authSlice';
import Loader from 'components/Loader/Loader';
import { LogoutText, SvgLogout, LogoutButton } from './LogoutBtn.styled';

export default function LogOutBtn(props) {
  const dispatch = useDispatch();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogOut = () => {
    logout();
    dispatch(setCredentials(initialState));
  };

  return (
    <>
      <LogoutButton {...props} onClick={handleLogOut}>
        <LogoutText>Logout</LogoutText>
        <SvgLogout>
          <use href={`${sprite}#logout`}></use>
        </SvgLogout>
      </LogoutButton>
      {isLoading && <Loader />}
    </>
  );
}
