import styled from '@emotion/styled';

export const Box = styled.div`
  width: 100%;
  border-bottom: ${props =>
    props.logged ? '1px solid rgba(239, 237, 232, 0.2)' : 'none'};
`;

export const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 61px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
    height: 84px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    padding-right: 96px;
    width: 1440px;
  }
`;
export const Backdrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.5);
`;
