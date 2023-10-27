import styled from '@emotion/styled';

export const WrapperCalendarInput = styled.div`
  position: relative;
  width: 161px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 14px;
  }
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
      : ({ theme }) => theme.color.border};
  font-size: 16px;
  line-height: 1.5;
`;

export const CalendarIcon = styled.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;
