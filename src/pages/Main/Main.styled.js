import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  width: 100%;
  padding: 0 20px;

  ${props =>
    props.showStatisticInfo && {
      display: 'flex',
    }}

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 767px) {
    ${props =>
      props.showStatisticInfo && {
        height: 812,
      }}
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) and (max-width: 1439px) {
    ${props =>
      props.showStatisticInfo && {
        height: 1024,
      }}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 744px;
  }

  @media screen and (max-width: 1439px) {
    ${props =>
      props.showStatisticInfo && {
        position: 'relative',
      }}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    position: relative;
    width: 1288px;
  }
`;
