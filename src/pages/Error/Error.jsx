import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.log(error)

  return <div>Error Page if no any required route found</div>
}
