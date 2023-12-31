import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import * as background from '/src/utils/background';

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.breakpoint.mobile};
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: ${({ theme }) => theme.breakpoint.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: ${({ theme }) => theme.breakpoint.desktop};
    gap: 100px;
  }
`;

export const ContentWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background-color: ${({ theme }) => theme.color.orangeFirst};
  width: 64%;
  height: 100vh;
  padding: 0 20px 0 20px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 28px;
    width: 55%;
    padding: 0 32px 0 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 46.5%;
    padding: 0 96px 0 96px;
  }
`;

export const LogoWrapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  left: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    top: 32px;
    left: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    left: 96px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.white};
`;

export const SvgIcon = styled.svg`
  width: 36px;
  height: 13px;
  fill: currentColor;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 44px;
    height: 17px;
  }
`;

export const TitleLogoP = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 17px;
  font-weight: 500;
  line-height: 1.17;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 22px;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 66px;
  font-weight: 500;
  line-height: calc(66 / 66);
  letter-spacing: 0.66px;
  color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 160px;
    line-height: calc(150 / 160);
    letter-spacing: 1.6px;
  }
`;

export const TextP = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 20px;
    line-height: calc(24 / 20);
    padding: 16px 60px;
  }
`;

export const BackgroundImageWrapDiv = styled.div`
  height: 100vh;
  width: 36%;
  display: flex;
  align-items: flex-end;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 45%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 46.5%;
    align-items: center;
  }
`;

export const BackgroundImageDiv = styled.div`
  height: 75%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: center center;
  background-position: 85% center;
  background-image: image-set(
    url(${background.mo_main}) 1x,
    url(${background.mo_main2x}) 2x,
    url(${background.mo_main3x}) 3x
  );

  /* MIN WIDTH 768px */
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: image-set(
      url(${background.ta_main}) 1x,
      url(${background.ta_main2x}) 2x,
      url(${background.ta_main3x}) 3x
    );
    height: 100%;
    background-position: 100% center;
  }

  /* MIN WIDTH 1440px */
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: image-set(
      url(${background.bg_main}) 1x,
      url(${background.bg_main2x}) 2x,
      url(${background.bg_main3x}) 3x
    );
    background-size: contain;
  }
`;
