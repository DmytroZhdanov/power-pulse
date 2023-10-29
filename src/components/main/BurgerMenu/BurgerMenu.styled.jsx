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
  top: 20px;
  right: 20px;

  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;

export const SvgBtn = styled.svg`
  stroke: ${({ theme }) => theme.color.white};
  width: 32px;
  height: 32px;
`;

export const Wrap = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 8px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: 32px;
  }
`;
