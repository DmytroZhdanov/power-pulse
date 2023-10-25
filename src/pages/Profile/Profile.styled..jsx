import styled from '@emotion/styled';

export const UserSection = styled.section`
  padding-top: 40px;
  padding-bottom: 66px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 40px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 38px;
    margin-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 25px;
    margin-top: 32px;
  }
`;
