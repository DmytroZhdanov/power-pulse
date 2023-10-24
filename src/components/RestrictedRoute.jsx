import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectToken } from 'src/redux/auth/selectors';
import { ROUTER } from 'src/utils/constants';

export default function RestrictedRoute({
  component: Component,
  redirectTo = ROUTER.MAIN,
}) {
  const token = useSelector(selectToken);

  return token ? <Navigate to={`../${redirectTo}`} /> : Component;
}

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
