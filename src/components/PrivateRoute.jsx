import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { Navigate } from 'react-router-dom';
import { selectToken } from 'src/redux/auth/selectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({ redirectTo, component: Component }) {
  const token = useSelector(selectToken);
  const shouldRedirect = !token;

=======
import { selectToken } from 'src/redux/auth/selectors';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useFetchUserParamsQuery } from '../redux/api';
import { ROUTER } from '../utils';

export default function PrivateRoute({ redirectTo, component: Component }) {
  const { data } = useFetchUserParamsQuery();
  const token = useSelector(selectToken);
  const shouldRedirect = !token;

  if (!data?.user.userParams) {
    return <Navigate to={`../${ROUTER.DATA}`} />;
  }

>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  return shouldRedirect ? <Navigate to={`../${redirectTo}`} /> : Component;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.object.isRequired,
};
