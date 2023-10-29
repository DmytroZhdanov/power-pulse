import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectToken } from 'src/redux/auth/selectors';
<<<<<<< HEAD

export default function RestrictedRoute({ component: Component, redirectTo }) {
  const token = useSelector(selectToken);

=======
import { useFetchUserParamsQuery } from 'src/redux/api';
import { ROUTER } from 'src/utils';

export default function RestrictedRoute({ component: Component, redirectTo }) {
  const { data } = useFetchUserParamsQuery();
  const token = useSelector(selectToken);

  if (!data?.user.userParams && token) {
    return <Navigate to={`../${ROUTER.DATA}`} />;
  }

>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  return token ? <Navigate to={`../${redirectTo}`} /> : Component;
}

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
