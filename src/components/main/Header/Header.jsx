import { useEffect, useState, useRef } from 'react';
import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import Logo from '../Logo/Logo';
import UserBar from '../UserBar/UserBar';
import UserNav from '../UserNav/UserNav';
import { Backdrop, Box, HeaderWrap } from './Header.styled';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
  const [logged, setLogged] = useState(true);
  const [openedModal, setOpenedModal] = useState(false);
  const isDesktop = useRef(window.innerWidth > 1439);

  const handleResize = () => {
    isDesktop.current = window.innerWidth > 1439;
  };

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
    <Box logged={logged}>
      <HeaderWrap>
        <Logo />

        {logged && (
          <>
            {isDesktop.current && <UserNav />}
            <UserBar />
            {isDesktop.current && <LogOutBtn />}
            <BurgerBtn setOpenedModal={setOpenedModal} />
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
