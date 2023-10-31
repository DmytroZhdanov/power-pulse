import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate, useResolvedPath } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import Header from 'components/main/Header/Header';
import StatisticsInfo from 'components/main/StatisticsInfo/StatisticsInfo';
import { ContainerDiv } from './Main.styled';

import { ROUTER } from 'src/utils/constants';

export default function Main() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();

  const page = pathname.split('/')[1];
  const showStatisticInfo =
    page === ROUTER.WELCOME ||
    page === ROUTER.SIGN_UP ||
    page === ROUTER.SIGN_IN ||
    page === ROUTER.DATA;

  // Redirect from Main page to Welcome page
  useEffect(() => {
    if (pathname === '/') {
      navigate('welcome');
    }
  }, [navigate, pathname]);

  return (
    <>
      <Header />

      <main>
        <ContainerDiv showStatisticInfo={showStatisticInfo}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>

          {showStatisticInfo && (
            <StatisticsInfo pathname={pathname} page={page} />
          )}
        </ContainerDiv>
      </main>
    </>
  );
}
