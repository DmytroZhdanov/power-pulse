import styled from '@emotion/styled';

export const Window = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #e6533c;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ButtonClose = styled.div`
  position: absolute;

  @media screen and (min-width: 375px) {
    top: 20px;
    right: 20px;
  }

  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;

export const SvgBtn = styled.svg`
  width: 32px;
  height: 32px;
`;

export const LogoutTextBurg = styled.p`
  font-size: 14px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SvgLogoutBurg = styled.svg`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const LogoutButtonBurg = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: #efede8;
  stroke: #efede8;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: 32px;
  }
`;
