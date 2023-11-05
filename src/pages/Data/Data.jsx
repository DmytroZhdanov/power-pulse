import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useResolvedPath } from 'react-router-dom';

import DataForm from 'components/data/DataForm/DataForm';
import { Container, Indicator, IndicatorsWrapper } from './Data.styled';

import { useFetchUserParamsQuery } from 'src/redux/api';
import { DATA_STEPS, ROUTER } from 'src/utils';
import { setStates } from 'src/redux/states/statesSlice';

const initialState = {
  height: '',
  currentWeight: '',
  desiredWeight: '',
  birthday: '',
  blood: '',
  sex: '',
  levelActivity: '',
};

export function Data() {
  const [userParams, setUserParams] = useState(initialState);
  const [step, setStep] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useResolvedPath();

  const { data, isFetching, isError, error } = useFetchUserParamsQuery();

  useEffect(() => {
    dispatch(setStates({ isLoading: isFetching, isError, error }));
  }, [dispatch, error, isError, isFetching]);

  useEffect(() => {
    if (data?.user.userParams) {
      return navigate(`../${ROUTER.DIARY}`);
    }
  }, [data, navigate]);

  useEffect(() => {
    setStep(pathname.split('/')[2]);

    if (pathname === `/${ROUTER.DATA}`) {
      navigate(`${DATA_STEPS.FIRST}`);
    }
  }, [navigate, pathname]);

  return (
    <Container>
      <DataForm
        step={step}
        userParams={userParams}
        setUserParams={setUserParams}
      />

      <IndicatorsWrapper>
        <Indicator step={step} />
        <Indicator step={step} />
        <Indicator step={step} />
      </IndicatorsWrapper>
    </Container>
  );
}
