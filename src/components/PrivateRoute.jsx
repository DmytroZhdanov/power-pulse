import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'src/redux/auth/selectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({ redirectTo, component: Component }) {
  const token = useSelector(selectToken);
  const shouldRedirect = !token;

  return shouldRedirect ? <Navigate to={`../${redirectTo}`} /> : Component;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object.isRequired,
};
