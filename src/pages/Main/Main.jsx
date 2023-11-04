import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useResolvedPath } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import Header from 'components/main/Header/Header';
import StatisticsInfo from 'components/main/StatisticsInfo/StatisticsInfo';
import Icon from 'components/common/IconsComp/Icon';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import FeedbackForm from 'components/main/FeedbackForm/FeedbackForm';
import { ContainerDiv, FeedbackIconDiv } from './Main.styled';

import { ROUTER } from 'src/utils/constants';
import { selectToken } from 'src/redux/auth/selectors';
import { setPathname } from 'src/redux/states/statesSlice';

export default function Main() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useResolvedPath();
  const token = useSelector(selectToken);

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

    dispatch(setPathname(pathname));
  }, [dispatch, navigate, pathname]);

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

          {token && (
            <FeedbackIconDiv onClick={() => setShowFeedbackForm(true)}>
              <Icon name="help" />
            </FeedbackIconDiv>
          )}

          <BasicModalWindow
            onShow={showFeedbackForm}
            onClose={() => setShowFeedbackForm(false)}
          >
            <FeedbackForm onClose={() => setShowFeedbackForm(false)} />
          </BasicModalWindow>
        </ContainerDiv>
      </main>
    </>
  );
}
