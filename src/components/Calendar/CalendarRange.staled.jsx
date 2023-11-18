
import styled from '@emotion/styled';

export const CalendarIconDiv = styled.div`
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.color.orangeSecond};
    transition:
      stroke 300ms ease-in-out,
      scale 300ms ease-in-out;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 24px;
      height: 24px;
    }
  }
`;