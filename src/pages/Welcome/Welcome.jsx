import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ROUTER } from 'src/utils/constants';
import ErrorHandler from '../../components/common/ErrorHandler/ErrorHandler';
import { useLazyRefreshQuery } from '../../redux/api';
import { setCredentials, setToken } from '../../redux/auth/authSlice';
import {
  Button,
  ButtonWrapper,
  Container,
  Span,
  Title,
} from './Welcome.styled';

export function Welcome() {
  const dispatch = useDispatch();
  const [refresh, { isFetching, isError, error }] = useLazyRefreshQuery();
  const params = useLocation();

  const token = params.search.split('token=')[1]?.replace('#', '');

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
    <Container>
      <Title>
        Transforming your <Span>body</Span> shape with Power Pulse
      </Title>

      <ButtonWrapper>
        <Button to={`../${ROUTER.SIGN_UP}`}>Sign Up</Button>
        <Button to={`../${ROUTER.SIGN_IN}`}>Sign In</Button>
      </ButtonWrapper>

      <ErrorHandler isLoading={isFetching} isError={isError} error={error} />
    </Container>
  );
}
