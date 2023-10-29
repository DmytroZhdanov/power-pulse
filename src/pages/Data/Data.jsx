<<<<<<< HEAD
// import FirstStep from 'components/data/FirstStep/FirstStep';
// import SecondStep from 'components/data/SecondStep/SecondStep';
// import ThirdStep from 'components/data/ThirdStep/ThirdStep';
import DataComponent from '../../components/data/DataComponent';

export function Data() {
  return (
    <div>
      {/* <div>Data page</div> */}
      <DataComponent />
      {/* <FirstStep />
      <SecondStep />
      <ThirdStep /> */}
    </div>
=======
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useResolvedPath } from 'react-router-dom';
import { useFetchUserParamsQuery } from 'src/redux/api';
import { Container, Indicator, IndicatorsWrapper } from './Data.styled';
import { DATA_STEPS, ROUTER } from 'src/utils';
import Loader from '../../components/Loader/Loader';
import BasicModalWindow from '../../components/common/BasicModalWindow/BasicModalWindow';
import TimerWarning from '../../components/common/TimerWarning/TimerWarning';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';

const initialState = {};

export function Data() {
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const [userParams, setUserParams] = useState(initialState);
  const [step, setStep] = useState();
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useResolvedPath();

  const { data, isFetching, isError, error } = useFetchUserParamsQuery();

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
    setShowError(isError);
  }, [isError]);

  useEffect(() => {
    if (error?.status === 401) {
      navigate(`../${ROUTER.WELCOME}`);
    }

    if (data?.user.userParams) {
      return navigate(`../${ROUTER.DIARY}`);
    }
  }, [data, error, navigate]);

  useEffect(() => {
    setStep(pathname.split('/')[2]);

    if (pathname === `/${ROUTER.DATA}`) {
      navigate(`${DATA_STEPS.FIRST}`);
    }
  }, [navigate, pathname]);

  return (
    <Container>
      <Outlet context={[userParams, setUserParams]} />

      <IndicatorsWrapper>
        <Indicator step={step} />
        <Indicator step={step} />
        <Indicator step={step} />
      </IndicatorsWrapper>

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
    </Container>
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  );
}
