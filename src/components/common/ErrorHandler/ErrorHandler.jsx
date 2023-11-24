import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import TimerWarning from 'components/common/TimerWarning/TimerWarning';
import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';

import { initialState, setCredentials } from 'src/redux/auth/authSlice';
import {
  selectError,
  selectIsError,
  selectIsLoading,
  selectPathname,
} from 'src/redux/states/selectors';

export default function ErrorHandler() {
  const dispatch = useDispatch();

  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const [showError, setShowError] = useState(false);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const error = useSelector(selectError);
  const pathname = useSelector(selectPathname);

  const showLoader = pathname !== '/diary';
  const [errorMessage, setErrorMessage] = useState('');

  // Shows a warning letter if fetch request takes more then 5 seconds to execute.
  // Because backend is on free hosting server and it takes a long time to execute fetch request after some time of inactivity.
  useEffect(() => {
    let id;

    if (isLoading) {
      id = setTimeout(setShowTimerWarning, 3000, true);
    } else {
      setShowTimerWarning(false);
    }

    return () => {
      clearTimeout(id);
    };
  }, [isLoading]);

  // Show pop up with error message for 2 seconds if error occurs
  useEffect(() => {
    if (isError) {
      setErrorMessage(error.data.message);
      setShowError(true);
      setTimeout(setShowError, 2000, false);
    }
  }, [error, isError]);

  // Removes token from redux store if fetch request unauthorized
  useEffect(() => {
    if (error?.status === 401) {
      dispatch(setCredentials(initialState));
    }
  }, [dispatch, error]);

  return (
    <>
      {isLoading && showLoader && <Loader />}

      <BasicModalWindow
        onShow={isLoading && showTimerWarning}
        onClose={() => setShowTimerWarning(false)}
        type={'Warning'}
      >
        <TimerWarning />
      </BasicModalWindow>

      <BasicModalWindow
        onShow={showError}
        onClose={() => setShowError(false)}
        type={'Error'}
      >
        <ErrorMessage message={errorMessage} />
      </BasicModalWindow>
    </>
  );
}
