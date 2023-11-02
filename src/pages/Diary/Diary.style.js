import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 45px;
  padding-bottom: 80px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-bottom: 68px;
  }
`;

export const HeaderWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 64px;
    margin-bottom: 32px;

    & > :first-of-type {
      align-self: flex-end;
    }
    & > :last-of-type {
      align-self: flex-start;
    }
  }
`;

export const ContentWrapperDiv = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const DayStatisticWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 0px;
    width: 826px;
  }
`;
