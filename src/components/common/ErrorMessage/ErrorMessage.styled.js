import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  display: flex;
  gap: 10px;
  width: 280px;
  align-items: center;
  padding: 35px 35px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 500px;
    gap: 30px;
    padding: 70px 70px;
  }
`;

export const ErrorIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.orangeThird};
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const MessageP = styled.p`
  color: ${({ theme }) => theme.color.white};
  line-height: 1.5;
`;
