import styled from '@emotion/styled';
import { DATA_STEPS } from '../../utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  padding-top: 127px;
  padding-bottom: 20px;
  height: 812px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
    padding-bottom: 32px;
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 200px;
    height: 800px;
  }
`;

export const IndicatorsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: auto;
`;

export const Indicator = styled.div`
  width: 50px;
  height: 4px;
  border-radius: 2px;

  :nth-of-type(1) {
    background-color: ${({ theme }) => theme.color.hover};
    box-shadow: ${({ theme }) => theme.boxShadow.dataIndicator};
  }

  :nth-of-type(2) {
    background-color: ${({ theme, step }) => {
      return step !== DATA_STEPS.FIRST
        ? theme.color.hover
        : theme.color.default;
    }};
    box-shadow: ${({ theme, step }) =>
      step !== DATA_STEPS.FIRST ? theme.boxShadow.dataIndicator : 'none'};
  }

  :nth-of-type(3) {
    background-color: ${({ theme, step }) =>
      step === DATA_STEPS.THIRD ? theme.color.hover : theme.color.default};
    box-shadow: ${({ theme, step }) =>
      step === DATA_STEPS.THIRD ? theme.boxShadow.dataIndicator : 'none'};
  }

  @media screen and (min-width: 768px) {
    width: 80px;
  }
`;
