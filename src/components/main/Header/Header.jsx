import { useEffect, useState } from 'react';
import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import Logo from 'components/main/Logo/Logo';
import UserBar from 'components/main/UserBar/UserBar';
import UserNav from 'components/main/UserNav/UserNav';
import { Backdrop, Box, HeaderWrap } from './Header.styled';
import BurgerBtn from 'components/main/BurgerBtn/BurgerBtn';
import BurgerMenu from 'components/main/BurgerMenu/BurgerMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'src/redux/auth/selectors';

export default function Header() {
  const token = useSelector(selectToken);
  const [isLogged, setIsLogged] = useState(token ? true : false);
  const [openedModal, setOpenedModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };

  useEffect(() => {
    setIsLogged(token);
  }, [token]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      setOpenedModal(false);
    }
  };

  return (
    <Box logged={isLogged}>
      <HeaderWrap>
        <Logo />

        {isLogged && (
          <>
            {isDesktop && <UserNav />}
            <UserBar />
            {isDesktop && <LogOutBtn />}
            {!isDesktop && <BurgerBtn setOpenedModal={setOpenedModal} />}
            {openedModal && (
              <Backdrop onClick={handleBackdropClick}>
                <BurgerMenu setOpenedModal={setOpenedModal}></BurgerMenu>
              </Backdrop>
            )}
          </>
        )}
      </HeaderWrap>
    </Box>
  );
}