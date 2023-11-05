import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LogoutTextP, SvgLogout, LogoutButton } from './LogoutBtn.styled';

import { useLogoutMutation } from 'src/redux/api';
import { initialState, setCredentials } from 'src/redux/auth/authSlice';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { useTranslation } from 'react-i18next';
import { setStates } from 'src/redux/states/statesSlice';

export default function LogOutBtn(props) {
  const dispatch = useDispatch();
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

  const { t } = useTranslation(['Header']);

  const handleLogOut = async () => {
    try {
      await logout();
      dispatch(setCredentials(initialState));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(setStates({ isLoading, isError, error }));
  }, [dispatch, error, isError, isLoading]);

  return (
    <>
      <LogoutButton {...props} onClick={handleLogOut}>
        <LogoutTextP> {t('buttons.logout', { ns: 'Header' })}</LogoutTextP>

        <SvgLogout>
          <use href={`${sprite}#logout`}></use>
        </SvgLogout>
      </LogoutButton>
    </>
  );
}
