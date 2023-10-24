import { Suspense, useEffect } from 'react';
import { Outlet, useResolvedPath } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import Header from 'components/main/Header/Header';
import StatisticsInfo from 'components/main/StatisticsInfo/StatisticsInfo';
import { Container } from './Main.styled';

import { ROUTER } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyRefreshQuery } from '../../redux/api';
import { selectToken } from '../../redux/auth/selectors';
import { setCredentials } from '../../redux/auth/authSlice';
import axios from 'axios';

export default function Main() {
  const dispatch = useDispatch();
  const [refresh, { isFetching }] = useLazyRefreshQuery();
  const token = useSelector(selectToken);

  const { pathname } = useResolvedPath();
  const page = pathname.split('/')[1];
  const showStatisticInfo =
    page === '' ||
    page === ROUTER.SIGN_UP ||
    page === ROUTER.SIGN_IN ||
    page === ROUTER.DATA.split('/')[0];

  useEffect(() => {
    const refetch = async () => {
      if (token) {
        try {
          // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          // axios.defaults.headers.common.Authorization = '';
          const user = await refresh().unwrap();
          dispatch(setCredentials({ user, token }));
        } catch (error) {
          console.error(error.message);
        }
      }
    };
    refetch();
  }, [dispatch, token, refresh]);

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
      {isFetching && <Loader />}
    </>
  );
}
