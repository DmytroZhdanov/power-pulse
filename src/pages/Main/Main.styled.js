import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;

  ${props =>
    props.showStatisticInfo && {
      display: 'flex',
    }}

  @media screen and (min-width: 375px) {
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

  @media screen and (min-width: 767px) and (max-width: 1439px) {
    ${props =>
      props.showStatisticInfo && {
        height: 1024,
      }}
  }

  @media screen and (min-width: 768px) {
    width: 744px;
  }

  @media screen and (max-width: 1439px) {
    ${props =>
      props.showStatisticInfo && {
        position: 'relative',
        justifyContent: 'space-between',
      }}
  }

  @media screen and (min-width: 1440px) {
    width: 1288px;
  }
`;
