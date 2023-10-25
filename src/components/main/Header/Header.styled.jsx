import styled from '@emotion/styled';

export const Box = styled.div`
  width: 100%;
  border-bottom: ${props =>
    props.logged ? '1px solid rgba(239, 237, 232, 0.2)' : 'none'};
  position: ${props => (props.logged ? 'static' : 'absolute')};
`;

export const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 61px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 375px) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 744px;
    height: 84px;
  }

  @media screen and (min-width: 1440px) {
    width: 1288px;
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
