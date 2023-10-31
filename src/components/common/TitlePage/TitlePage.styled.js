import styled from '@emotion/styled';

export const TitleH1 = styled.h1`

&::first-letter {
    text-transform: uppercase;
  }
  font-size: 24px;
  line-height: calc(28 / 24);

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 32px;
    line-height: calc(44 / 32);
  }
`;
