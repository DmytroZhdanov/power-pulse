import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectToken } from 'src/redux/auth/selectors';
import { useFetchUserParamsQuery } from 'src/redux/api';
import { ROUTER } from 'src/utils';

export default function RestrictedRoute({ component: Component, redirectTo }) {
  const { data, isError } = useFetchUserParamsQuery();
  const token = useSelector(selectToken);

  if ((!data?.user.userParams || isError) && token) {
    return <Navigate to={`../${ROUTER.DATA}`} />;
  }

  return token ? <Navigate to={`../${redirectTo}`} /> : Component;
}

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
