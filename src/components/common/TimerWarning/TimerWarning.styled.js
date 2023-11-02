import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  padding: 40px 20px;
  width: calc(100vw - 40px);
  font-size: 16px;
  line-height: calc(20 / 16);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 500px;
    padding: 40px;
    font-size: 20px;
    line-height: calc(28 / 20);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 700px;
    padding: 70px 70px;
  }
`;

export const TitleH2 = styled.h2`
  font-weight: 700;
`;

export const TextP = styled.p`
  margin: 40px 0;
`;

export const SignatureP = styled.p``;
