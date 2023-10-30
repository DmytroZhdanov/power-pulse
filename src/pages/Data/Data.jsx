import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Indicator, IndicatorsWrapper } from './Data.styled';

const initialState = {};

export function Data() {
  const [userParams, setUserParams] = useState(initialState);
  const [step, setStep] = useState();

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
