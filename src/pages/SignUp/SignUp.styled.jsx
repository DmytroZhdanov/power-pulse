import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 127px;
  height: 812px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
    height: 1024px;
  }

  @media screen and (max-width: 1439px) {
    position: absolute;
    z-index: 2;
  }

  @media screen and (min-width: 1440px) {
    width: 598px;
    padding-top: 200px;
    height: 800px;
  }
`;
