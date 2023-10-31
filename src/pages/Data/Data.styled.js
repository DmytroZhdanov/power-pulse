import styled from '@emotion/styled';
import { DATA_STEPS } from '../../utils';

export const Container = styled.div`
  position: relative;
  z-index: 12;
`;

export const IndicatorsWrapper = styled.div`
  position: absolute;
  z-index: 2;
  bottom: -170px; // Will be amended after forms implementation
  display: flex;
  gap: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    bottom: -110px; // Will be amended after forms implementation
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    bottom: 32px; // Will be amended after forms implementation
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    bottom: 0; // Will be amended after forms implementation
  }
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 80px;
  }
`;
