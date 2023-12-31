import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectToken } from 'src/redux/auth/selectors';
import { useLazyFetchUserParamsQuery } from 'src/redux/api';
import { ROUTER } from 'src/utils';
import { setStates } from '../redux/states/statesSlice';

export default function PrivateRoute({ redirectTo, component: Component }) {
  const [fetchUserParams, { isLoading, isError, error }] =
    useLazyFetchUserParamsQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const shouldRedirect = !token;

  useEffect(() => {
    dispatch(setStates({ isLoading, isError, error }));
  }, [dispatch, error, isError, isLoading]);

  // Makes fetch request to check is there user parameters on database.
  // If no user parameters found redirect to Data page to fill in the form.
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchUserParams().unwrap();

        if (!data?.user.userParams) {
          navigate(`../${ROUTER.DATA}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetch();
    }
  }, [navigate, token, fetchUserParams]);

  return shouldRedirect ? <Navigate to={`../${redirectTo}`} /> : Component;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
};
