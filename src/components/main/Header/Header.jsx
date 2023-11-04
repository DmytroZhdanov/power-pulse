import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import Logo from 'components/main/Logo/Logo';
import UserBar from 'components/main/UserBar/UserBar';
import UserNav from 'components/main/UserNav/UserNav';
import BurgerBtn from 'components/main/BurgerBtn/BurgerBtn';
import BurgerMenu from 'components/main/BurgerMenu/BurgerMenu';
import { BackdropDiv, BoxHeader, HeaderWrapDiv } from './Header.styled';

import { selectToken } from 'src/redux/auth/selectors';
import { useLazyFetchUserParamsQuery } from 'src/redux/api';
import { useLocation } from 'react-router-dom';
import CalendarDiv from '../CalendarIcon/CalendarDiv';
import { CSSTransition } from 'react-transition-group';

export default function Header() {
  const token = useSelector(selectToken);
  const [fetchUserParams, { data }] = useLazyFetchUserParamsQuery();
  const [isLogged, setIsLogged] = useState(
    token && data?.user.userParams ? true : false,
  );
  const [openedModal, setOpenedModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const location = useLocation();
  const nodeBackdropRef = useRef(null);
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };
  // Check for user params to properly display styles of header
  useEffect(() => {
    const fetch = async () => {
      if (token) {
        try {
          const data = await fetchUserParams().unwrap();

          setIsLogged(token && data?.user.userParams ? true : false);
        } catch (error) {
          console.error(error);
        }
      } else {
        setIsLogged(false);
      }
    };

    fetch();
  }, [fetchUserParams, token, location]);

  // Add event listener on componentDidMount and remove it on componentWillUnmount
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /**
   * Close modal window
   *
   * @param {Object} event Object of event triggered the function call
   */
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      setOpenedModal(false);
    }
  };

  return (
    <BoxHeader logged={isLogged}>
      <HeaderWrapDiv>
        <Logo />

        {isLogged && (
          <>
            {isDesktop && <UserNav />}
            <UserBar />
            <CalendarDiv />
            {isDesktop && <LogOutBtn />}
            {!isDesktop && <BurgerBtn setOpenedModal={setOpenedModal} />}
            <BurgerMenu
              setOpenedModal={setOpenedModal}
              openedModal={openedModal}
            ></BurgerMenu>

            <CSSTransition
              in={openedModal}
              nodeRef={nodeBackdropRef}
              timeout={400}
              classNames="backdrop"
              unmountOnExit
            >
              <BackdropDiv
                ref={nodeBackdropRef}
                onClick={handleBackdropClick}
              />
            </CSSTransition>
          </>
        )}
      </HeaderWrapDiv>
    </BoxHeader>
  );
}
