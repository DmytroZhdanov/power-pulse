import { useSelector } from 'react-redux';
import { selectToken } from 'src/redux/auth/selectors';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useFetchUserParamsQuery } from '../redux/api';
import { ROUTER } from '../utils';

export default function PrivateRoute({ redirectTo, component: Component }) {
  const { data, isFetching, isError } = useFetchUserParamsQuery();
  const token = useSelector(selectToken);
  const shouldRedirect = !token;

  if ((!data?.user.userParams && !isFetching) || isError) {
    return <Navigate to={`../${ROUTER.DATA}`} />;
  }

  return shouldRedirect ? <Navigate to={`../${redirectTo}`} /> : Component;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object.isRequired,
};
