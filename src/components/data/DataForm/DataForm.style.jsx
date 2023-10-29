import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin-bottom: 32px;
`;

export const TextLabel = styled.label`
  position: relative;
  display: inline-block;
  span {
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity: 0;
    color: ${({ theme }) => theme.color.graySecond};

    font-size: 14px;
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
`;
export const TextInput = styled.input`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px 0 14px 14px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.graySecond};

  width: 153px;
  background-color: transparent;

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.color.orangeFirst};
    outline: none;
  }
`;
export const BirthdayContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;

  font-size: 16px;
  line-height: 24px;

  color: ${({ theme }) => theme.color.graySecond};

  width: 159px;
  background-color: transparent;
  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.color.orangeFirst};
    outline: none;
  }
  margin-top: 4px;
  @media screen and (min-width: 768px) {
    width: 153px;
    padding: 14px;
  }

  .calendar-svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.color.white};
  }

  .calendar-input-text {
    color: ${({ theme }) => theme.color.graySecond};
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const RadioContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  margin-bottom: 32px;
  legend {
    margin-bottom: 16px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.grayBackground};
  }
  label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.grayBackground};

    cursor: pointer;
  }
`;

export const RadioLabel = styled.label`
  span {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.color.input};

    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      border-radius: 50%;
      width: 12px;
      height: 12px;
      opacity: 0;
      background-color: ${({ theme }) => theme.color.orangeSecond};

      transition: all 300ms ease-in-out;
    }
  }

  input:checked + span {
    border: 3px solid ${({ theme }) => theme.color.orangeSecond};
  }
`;

export const RadioInput = styled.input`
  appearance: none;
  :checked ~ span::after {
    opacity: 1;
  }
`;
