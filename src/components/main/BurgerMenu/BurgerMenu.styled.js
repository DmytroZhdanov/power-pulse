import styled from '@emotion/styled';

export const WindowDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.orangeFirst};
  z-index: 1000;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: none;
  }
`;

export const ButtonCloseDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    top: 26px;
    right: 32px;
  }
`;

export const SvgBtn = styled.svg`
  stroke: ${({ theme }) => theme.color.white};
  width: 32px;
  height: 32px;
`;

export const WrapDiv = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 8px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    bottom: 32px;
    left: 32px;
  }
`;
