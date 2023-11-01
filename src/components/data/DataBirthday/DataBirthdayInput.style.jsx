import styled from '@emotion/styled';

export const WrapperCalendarInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

export const InputHidden = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  clip-path: inset(100%);
  white-space: nowrap;
  clip: rect(0 0 0 0);
`;

export const DefaultInputText = styled.p`
  color: ${({ setColor }) =>
    setColor === 'full'
      ? ({ theme }) => theme.color.white
      : 'rgb(117 117 117)'};
  transition:
    color ${({ theme }) => theme.transition.main},
    transform ${({ theme }) => theme.transition.main};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const CalendarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${({ setColor }) =>
    setColor === 'full'
      ? ({ theme }) => theme.color.white
      : 'rgb(117 117 117)'};
  transition:
    color ${({ theme }) => theme.transition.main},
    transform ${({ theme }) => theme.transition.main};

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
  }
`;
