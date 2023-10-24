import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTER } from '../utils/constants';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = ROUTER.MAIN,
}) => {
  const token = useSelector(selectToken);

  return token ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
