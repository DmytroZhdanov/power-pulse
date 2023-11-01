import styled from '@emotion/styled';

export const WrapperCalendarInputDiv = styled.div`
  position: relative;
  width: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.color.orangeFirst};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 171px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 244px;
  }
`;

export const CalendarInputTextP = styled.p`
  color: ${({ theme }) => theme.color.white};

  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;

export const CalendarIconDiv = styled.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 20px;
      height: 20px;
    }
  }
`;
