import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Loader from 'components/Loader/Loader';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import TimerWarning from 'components/common/TimerWarning/TimerWarning';
import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';
import { initialState, setCredentials } from 'src/redux/auth/authSlice';

export default function ErrorHandler({ isFetching, isError, error }) {
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let id;

    if (isFetching) {
      id = setTimeout(setShowTimerWarning, 5000, true);
    } else {
      setShowTimerWarning(false);
    }

    return clearTimeout(id);
  }, [isFetching]);

  useEffect(() => {
    if (isError) {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  }, [isError]);

  useEffect(() => {
    if (error?.status === 401) {
      dispatch(setCredentials(initialState));
    }
  }, [dispatch, error]);

  return (
    <>
      {isFetching && <Loader />}

      {isFetching && showTimerWarning && (
        <BasicModalWindow onClose={() => setShowTimerWarning(false)}>
          <TimerWarning />
        </BasicModalWindow>
      )}

      {showError && (
        <BasicModalWindow onClose={() => setShowError(false)}>
          <ErrorMessage message={error?.data?.message} />
        </BasicModalWindow>
      )}
    </>
  );
}
