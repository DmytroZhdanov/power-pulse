import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useResolvedPath } from 'react-router-dom';
import { DATA_STEPS, ROUTER } from 'src/utils';
import { Container, Indicator, IndicatorsWrapper } from './Data.styled';

const initialState = {};

export function Data() {
  const [userParams, setUserParams] = useState(initialState);
  const [step, setStep] = useState();

  const navigate = useNavigate();
  const { pathname } = useResolvedPath();

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
    </Container>
  );
}
