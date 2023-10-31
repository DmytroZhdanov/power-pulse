import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import ErrorHandler from 'components/common/ErrorHandler/ErrorHandler';
import {
  ButtonLink,
  ButtonWrapperDiv,
  ContainerDiv,
  Span,
  TitleH1,
} from './Welcome.styled';

import { useLazyRefreshQuery } from 'src/redux/api';
import { setCredentials, setToken } from 'src/redux/auth/authSlice';
import { ROUTER } from 'src/utils/constants';

export function Welcome() {
  const dispatch = useDispatch();
  const [refresh, { isFetching, isError, error }] = useLazyRefreshQuery();
  const params = useLocation();

  const token = params.search.split('token=')[1]?.replace('#', ''); // Reads token from url in case of google authorization

  // If there is a token in url, set it to redux store
  useEffect(() => {
    const refetch = async () => {
      if (token) {
        dispatch(setToken(token));

        try {
          const { user } = await refresh().unwrap();
          dispatch(setCredentials({ user, token }));
        } catch (error) {
          console.error(error);
        }
      }
    };

    refetch();
  }, [dispatch, token, refresh]);

  return (
    <ContainerDiv>
      <TitleH1>
        Transforming your <Span>body</Span> shape with Power Pulse
      </TitleH1>

      <ButtonWrapperDiv>
        <ButtonLink to={`../${ROUTER.SIGN_UP}`}>Sign Up</ButtonLink>
        <ButtonLink to={`../${ROUTER.SIGN_IN}`}>Sign In</ButtonLink>
      </ButtonWrapperDiv>

      <ErrorHandler isLoading={isFetching} isError={isError} error={error} />
    </ContainerDiv>
  );
}
