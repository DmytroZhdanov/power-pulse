import styled from '@emotion/styled';
import * as background from 'src/utils/background';
import { DATA_STEPS } from 'src/utils/constants';

export const BackgroundDiv = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;

  width: 298px;
  height: 571px;
  top: ${props => {
    switch (props.keyword) {
      case 'main':
        return `35%`;

      case DATA_STEPS.FIRST:
        return `29.6%`;

      case DATA_STEPS.SECOND:
        return `29.6%`;

      case DATA_STEPS.THIRD:
        return `29.6%`;

      default:
        break;
    }
  }};

  background-image: ${props => {
    switch (props.keyword) {
      case 'main':
        return `image-set(
          url(${background.mo_main}) 1x,
          url(${background.mo_main2x}) 2x,
          url(${background.mo_main3x}) 3x
          )`;

      case DATA_STEPS.FIRST:
        return `image-set(
          url(${background.mo_users}) 1x,
          url(${background.mo_users2x}) 2x,
          url(${background.mo_users3x}) 3x
          )`;

      case DATA_STEPS.SECOND:
        return `image-set(
          url(${background.mo_hours}) 1x,
          url(${background.mo_hours2x}) 2x,
          url(${background.mo_hours3x}) 3x
          )`;

      case DATA_STEPS.THIRD:
        return `image-set(
          url(${background.mo_ex}) 1x,
          url(${background.mo_ex2x}) 2x,
          url(${background.mo_ex3x}) 3x
          )`;

      default:
        break;
    }
  }};
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    top: 30%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    top: ${props => {
      switch (props.keyword) {
        case 'main':
          return `15%`;

        case DATA_STEPS.FIRST:
          return `18.5%`;

        case DATA_STEPS.SECOND:
          return `18.5%`;

        case DATA_STEPS.THIRD:
          return `18.5%`;

        default:
          break;
      }
    }};
    right: -12px;
    width: ${props => (props.keyword === 'main' ? '437px' : '488px')};
    height: ${props => (props.keyword === 'main' ? '893px' : '835px')};

    background-image: ${props => {
      switch (props.keyword) {
        case 'main':
          return `image-set(
          url(${background.ta_main}) 1x,
          url(${background.ta_main2x}) 2x,
          url(${background.ta_main3x}) 3x
          )`;

        case DATA_STEPS.FIRST:
          return `image-set(
          url(${background.ta_users}) 1x,
          url(${background.ta_users2x}) 2x,
          url(${background.ta_users3x}) 3x
          )`;

        case DATA_STEPS.SECOND:
          return `image-set(
          url(${background.ta_hours}) 1x,
          url(${background.ta_hours2x}) 2x,
          url(${background.ta_hours3x}) 3x
          )`;

        case DATA_STEPS.THIRD:
          return `image-set(
          url(${background.ta_ex}) 1x,
          url(${background.ta_ex2x}) 2x,
          url(${background.ta_ex3x}) 3x
          )`;

        default:
          break;
      }
    }};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    position: relative;
    right: -80px;
    width: 670px;
    height: 800px;
    top: 0;

    background-image: ${props => {
      switch (props.keyword) {
        case 'main':
          return `image-set(
          url(${background.bg_main}) 1x,
          url(${background.bg_main2x}) 2x,
          url(${background.bg_main3x}) 3x
          )`;

        case DATA_STEPS.FIRST:
          return `image-set(
          url(${background.bg_users}) 1x,
          url(${background.bg_users2x}) 2x,
          url(${background.bg_users3x}) 3x
          )`;

        case DATA_STEPS.SECOND:
          return `image-set(
          url(${background.bg_hours}) 1x,
          url(${background.bg_hours2x}) 2x,
          url(${background.bg_hours3x}) 3x
          )`;

        case DATA_STEPS.THIRD:
          return `image-set(
          url(${background.bg_ex}) 1x,
          url(${background.bg_ex2x}) 2x,
          url(${background.bg_ex3x}) 3x
          )`;

        default:
          break;
      }
    }};
  }
`;

const Block = styled.div`
  position: absolute;
  display: inline-flex;
  padding: 14px 18px;
  border-radius: 12px;
  font-weight: 700;

  :nth-of-type(1) {
    bottom: 55px;
    left: -5px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    :nth-of-type(1) {
      bottom: 70px;
      left: -15px;
    }
  }

  :nth-of-type(2) {
    bottom: 40px;
    right: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    :nth-of-type(1) {
      bottom: 214px;
      left: 0;
    }

    :nth-of-type(2) {
      bottom: 48px;
      right: 32px;
    }
  }

  @media screen and (max-width: 1439px) {
    :nth-of-type(3),
    :nth-of-type(4),
    :nth-of-type(5) {
      display: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    :nth-of-type(1) {
      bottom: ${props => (props.isError ? '320px' : '460px')};
      left: 0;
    }

    :nth-of-type(2) {
      bottom: ${props => (props.isError ? '171px' : '335px')};
      right: ${props => (props.isError ? '32px' : '30px')};
    }

    :nth-of-type(3) {
      bottom: 250px;
      left: -50px;
    }

    :nth-of-type(4) {
      bottom: 100px;
      right: 75px;
    }

    :nth-of-type(5) {
      bottom: 40px;
      left: 0;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const DarkBlockDiv = styled(Block)`
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.default};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 12px;
    padding: 20px 36px 20px 23px;
  }
`;

export const DarkBlockIconWrapperDiv = styled(IconWrapper)`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.orangeSecond};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`;

export const DarkBlockIconSvg = styled.svg`
  fill: ${({ theme }) => theme.color.white};
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

export const DarkBlockTextP = styled.p`
  color: ${({ theme }) => theme.color.graySecond};
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const DarkBlockSpanP = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: calc(18 / 16);
  margin-bottom: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
    line-height: calc(24 / 24);
    margin-bottom: 8px;
  }
`;

export const ColoredBlockDiv = styled(Block)`
  align-items: flex-end;
  gap: 8px;
  padding-right: 37px;
  background-color: ${({ theme }) => theme.color.orangeSecond};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 11px;
    padding: 14px 38px 14px 28px;
  }
`;

export const ColoredBlockIconWrapperDiv = styled(IconWrapper)`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.orangeThird};
  margin-bottom: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

export const ColoredBlockIconSvg = styled.svg`
  fill: ${({ theme }) => theme.color.fullWhite};
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 16px;
    height: 16px;
  }
`;

export const ColoredBlockTextP = styled.p`
  color: ${({ theme }) => theme.color.graySecond};
  font-size: 12px;
  font-weight: 700;
  line-height: calc(16 / 12);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ColoredBlockSpanP = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: calc(24 / 24);
  letter-spacing: -1px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 48px;
    line-height: calc(50 / 48);
  }
`;
