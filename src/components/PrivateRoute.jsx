import { useSelector } from 'react-redux';
import { selectToken } from 'src/redux/auth/selectors';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLazyFetchUserParamsQuery } from '../redux/api';
import { ROUTER } from '../utils';
import { useEffect } from 'react';

export default function PrivateRoute({ redirectTo, component: Component }) {
  const [trigger, { isFetching }] = useLazyFetchUserParamsQuery();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const shouldRedirect = !token;

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await trigger().unwrap();

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
  }, [isFetching, navigate, token, trigger]);

  return shouldRedirect ? <Navigate to={`../${redirectTo}`} /> : Component;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object.isRequired,
};
