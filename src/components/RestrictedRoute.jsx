import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectToken } from 'src/redux/auth/selectors';
import { useLazyFetchUserParamsQuery } from 'src/redux/api';
import { ROUTER } from 'src/utils';
import { useEffect } from 'react';

export default function RestrictedRoute({ component: Component, redirectTo }) {
  const [trigger, { isFetching }] = useLazyFetchUserParamsQuery();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

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

  return token ? <Navigate to={`../${redirectTo}`} /> : Component;
}

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
