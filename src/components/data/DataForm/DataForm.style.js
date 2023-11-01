import styled from '@emotion/styled';

export const DataFormContainerDiv = styled.div`
  position: relative;
  z-index: 2;
`;

// FirstStep Component

export const TextLabel = styled.label`
  position: relative;
  display: inline-block;

  span {
    position: absolute;
    top: 0;
    left: 0;
    transition: all ${({ theme }) => theme.transition.main};
    opacity: 0;
    color: ${({ theme }) => theme.color.graySecond};

    font-size: 12px;
    line-height: calc(18 / 12);
  }

  input:focus + span,
  input:not(:placeholder-shown) + span {
    opacity: 1;
    transform: scale(0.75) translateY(-22px) translateX(0);
  }

  div {
    position: absolute;
    top: 102%;
    left: 4px;
    color: ${({ theme }) => theme.color.inputError};

    font-size: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    span {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    input:focus + span,
    input:not(:placeholder-shown) + span {
      opacity: 1;
      transform: scale(0.75) translateY(-26px) translateX(0);
    }
  }
`;

export const TextInput = styled.input`
  border: 1px solid ${({ theme }) => theme.color.grayFirst};
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({ theme }) => theme.color.input};
  width: 100%;
  background-color: transparent;

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.orangeFirst};
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const SuccessMessageDiv = styled.div`
  width: 140px;
  height: 10px;
  display: flex;
  align-content: center;

  svg {
    fill: green;
    width: 12px;
  }

  p {
    color: green;
    font-size: 11px;
  }
`;

// SecondStep Component

export const RadioContainer1Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 64px;
  margin-top: 28px;
  margin-bottom: 28px;

  legend {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.color.white};
  }

  label {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 32px;
    margin-bottom: 32px;

    legend {
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    label {
      margin-bottom: 8px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`;

export const ErrorContainerDiv = styled.div`
  position: absolute;
  width: 150px;
  top: -10%;
  left: 0;
`;

export const RadioLabel = styled.label`
  input {
    display: none;
  }

  span {
    flex: none;
    position: relative;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.color.input};

    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      border-radius: 50%;
      width: 9px;
      height: 9px;
      opacity: 0;
      background-color: ${({ theme }) => theme.color.orangeSecond};

      transition: all ${({ theme }) => theme.transition.main};
    }
  }

  input:checked + span {
    border: 2px solid ${({ theme }) => theme.color.orangeSecond};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    span {
      padding: 2px;
      width: 24px;
      height: 24px;

      ::after {
        width: 12px;
        height: 12px;
      }
    }
  }
`;

export const RadioInput = styled.input`
  appearance: none;

  :checked ~ span::after {
    opacity: 1;
  }
`;
