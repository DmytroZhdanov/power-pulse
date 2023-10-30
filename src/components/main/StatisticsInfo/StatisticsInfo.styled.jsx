import styled from '@emotion/styled';
import * as background from 'src/utils/background';
import { DATA_STEPS } from 'src/utils/constants';

export const Background = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;

  width: 298px;
  height: 571px;
  top: 421px;
  /* top: ${props => (props.isError ? '241px' : '421px')}; */

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
  background-size: 298px 571px;

  @media screen and (min-width: 375px) {
    top: 361px;
    /* top: ${props => (props.isError ? '241px' : '361px')}; */
  }

  @media screen and (min-width: 768px) {
    top: 131px;
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
    background-size: ${props =>
      props.keyword === 'main' ? '437px 893px' : '488px 835px'};
  }

  @media screen and (max-width: 1439px) {
    bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    right: -86px;
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
    background-size: 670px 800px;
  }
`;

const Block = styled.div`
  position: absolute;
  display: inline-flex;
  padding: 14px 18px;
  border-radius: 12px;
  font-weight: 700;

  :nth-of-type(1) {
    bottom: 186px;
    left: 44px;
    /* bottom: ${props => (props.isError ? '186px' : '300px')};
    left: ${props => (props.isError ? '44px' : 0)}; */
  }

  :nth-of-type(2) {
    bottom: 40px;
    right: 20px;
    /* bottom: ${props => (props.isError ? '40px' : '210px')};
    right: ${props => (props.isError ? '20px' : '20px')}; */
  }

  /* :nth-of-type(3) {
    bottom: 160px;
    left: 0;
  }

  :nth-of-type(4) {
    bottom: 70px;
    right: 20px;
  }

  :nth-of-type(5) {
    bottom: 20px;
    left: 0;
  } */

  @media screen and (min-width: 768px) {
    :nth-of-type(1) {
      bottom: 214px;
      left: 0;
      /* bottom: ${props => (props.isError ? '214px' : '360px')};
      left: ${props => (props.isError ? 0 : '-40px')}; */
    }

    :nth-of-type(2) {
      bottom: 48px;
      right: 32px;
      /* bottom: ${props => (props.isError ? '48px' : '265px')};
      right: ${props => (props.isError ? '32px' : '32px')}; */
    }

    /* :nth-of-type(3) {
      bottom: 190px;
      left: -40px;
    } */

    /* :nth-of-type(4) {
      bottom: 95px;
      right: 32px;
    } */

    /* :nth-of-type(5) {
      bottom: 20px;
      left: -40px;
    } */
  }

  @media screen and (max-width: 1439px) {
    :nth-of-type(3),
    :nth-of-type(4),
    :nth-of-type(5) {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    :nth-of-type(1) {
      bottom: ${props => (props.isError ? '320px' : '460px')};
      left: ${props => (props.isError ? 0 : '-40px')};
    }

    :nth-of-type(2) {
      bottom: ${props => (props.isError ? '171px' : '335px')};
      right: ${props => (props.isError ? '32px' : '62px')};
    }

    :nth-of-type(3) {
      bottom: 250px;
      left: -190px;
    }

    :nth-of-type(4) {
      bottom: 105px;
      right: 152px;
    }

    :nth-of-type(5) {
      bottom: 40px;
      left: -100px;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const DarkBlock = styled(Block)`
  align-items: center;
  gap: 8px;
  background-color: #303030;

  @media screen and (min-width: 768px) {
    gap: 12px;
    padding: 20px 36px 20px 23px;
  }
`;

export const DarkBlockIconWrapper = styled(IconWrapper)`
  width: 30px;
  height: 30px;
  background-color: #ef8964;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const DarkBlockIcon = styled.svg`
  fill: #efede8;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const DarkBlockText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const DarkBlockSpan = styled.p`
  font-size: 16px;
  line-height: calc(18 / 16);
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(24 / 24);
    margin-bottom: 8px;
  }
`;

export const ColoredBlock = styled(Block)`
  align-items: flex-end;
  gap: 8px;
  padding-right: 37px;
  background-color: #ef8964;

  @media screen and (min-width: 768px) {
    gap: 11px;
    padding: 14px 38px 14px 28px;
  }
`;

export const ColoredBlockIconWrapper = styled(IconWrapper)`
  width: 20px;
  height: 20px;
  background-color: #efa082;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

export const ColoredBlockIcon = styled.svg`
  fill: #ffffff;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const ColoredBlockText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const ColoredBlockSpan = styled.p`
  font-size: 48px;
  line-height: calc(50 / 48);
  letter-spacing: -1px;
`;
