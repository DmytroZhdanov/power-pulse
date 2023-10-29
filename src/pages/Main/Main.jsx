import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate, useResolvedPath } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import Header from 'components/main/Header/Header';
import StatisticsInfo from 'components/main/StatisticsInfo/StatisticsInfo';
import { Container } from './Main.styled';

import { ROUTER } from 'src/utils/constants';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { stepValueForm } from '../../redux/dataPage/selectors';

export default function Main() {
  const stepValue = useSelector(stepValueForm);

=======

export default function Main() {
  const navigate = useNavigate();
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  const { pathname } = useResolvedPath();

  const page = pathname.split('/')[1];
  const showStatisticInfo =
    page === ROUTER.WELCOME ||
    page === ROUTER.SIGN_UP ||
    page === ROUTER.SIGN_IN ||
    page === ROUTER.DATA;
<<<<<<< HEAD
  // console.log(page === stepValue);
=======

  useEffect(() => {
    if (pathname === '/') {
      navigate('welcome');
    }
  }, [navigate, pathname]);
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9

  return (
    <>
      <Header />

      <main>
        <Container showStatisticInfo={showStatisticInfo}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>

          {showStatisticInfo && (
            <StatisticsInfo pathname={pathname} page={page} />
          )}
        </Container>
      </main>
    </>
  );
}
