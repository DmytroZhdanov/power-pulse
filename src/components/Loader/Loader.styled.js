import styled from '@emotion/styled';

export const WrapThreeDotsDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
  }
`;
