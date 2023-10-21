import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 744px;
  }

  @media screen and (min-width: 1440px) {
    width: 1288px;
  }
`;
