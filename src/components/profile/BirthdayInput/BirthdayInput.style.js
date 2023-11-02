import styled from '@emotion/styled';

export const WrapperCalendarInput = styled.div`
  position: relative;
  width: 161px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};

  @media screen and (max-width: 374px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 14px;
  }
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
  width: 18px;
  height: 18px;

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
