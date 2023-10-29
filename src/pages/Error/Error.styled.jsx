import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import * as background from '/src/utils/background';

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: ${({ theme }) => theme.breakpoint.mobile};
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: ${({ theme }) => theme.breakpoint.tablet};
  }

  @media screen and (min-width: 1440px) {
    max-width: ${({ theme }) => theme.breakpoint.desktop};
    gap: 100px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background-color: ${({ theme }) => theme.color.orangeFirst};
  width: 64%;
  height: 100vh;
  margin-top: -62px;
  padding: 0 20px 0 20px;

  @media screen and (min-width: 768px) {
    gap: 28px;
    width: 55%;
    margin-top: -85px;
    padding: 0 32px 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 46.5%;
    padding: 0 96px 0 96px;
  }
`;

export const Title = styled.h1`
  font-size: 66px;
  font-weight: 500;
  line-height: calc(66 / 66);
  letter-spacing: 0.66px;
  color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: calc(150 / 160);
    letter-spacing: 1.6px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const LinkStyled = styled(Link)`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayFirst};
  padding: 12px 40px;
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transition.main},
    border ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.hover};
    border: 1px solid ${({ theme }) => theme.color.hover};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(24 / 20);
    padding: 16px 60px;
  }
`;

export const BackgroundImageWrap = styled.div`
  height: 100vh;
  width: 36%;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 45%;
  }

  @media screen and (min-width: 1440px) {
    width: 46.5%;
  }
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 100% center;
  background-image: image-set(
    url(${background.mo_main}) 1x,
    url(${background.mo_main2x}) 2x,
    url(${background.mo_main3x}) 3x
  );

  /* MIN WIDTH 768px */
  @media screen and (min-width: 768px) {
    background-image: image-set(
      url(${background.ta_main}) 1x,
      url(${background.ta_main2x}) 2x,
      url(${background.ta_main3x}) 3x
    );
  }

  /* MIN WIDTH 1440px */
  @media screen and (min-width: 1440px) {
    background-image: image-set(
      url(${background.bg_main}) 1x,
      url(${background.bg_main2x}) 2x,
      url(${background.bg_main3x}) 3x
    );
  }
`;
