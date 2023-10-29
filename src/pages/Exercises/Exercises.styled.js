import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    margin-bottom: 64px;
  }
`;
