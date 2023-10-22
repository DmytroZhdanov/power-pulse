import styled from '@emotion/styled';

const background = 'src/assets/images/background';

export const Background = styled.div`
  width: 298px;
  height: 571px;

  background-image: ${props => {
    switch (props.keyword) {
      case 'main':
        return `image-set(
          url(${background}/Mobile/mo_main.jpg) 1x,
          url(${background}/Mobile/mo_main@2x.jpg) 2x,
          url(${background}/Mobile/mo_main@3x.jpg) 3x
          )`;

      case '1':
        return `image-set(
          url(../${background}/Mobile/mo_users.jpg) 1x,
          url(../${background}/Mobile/mo_users@2x.jpg) 2x,
          url(../${background}/Mobile/mo_users@3x.jpg) 3x
          )`;

      case '2':
        return `image-set(
          url(../${background}/Mobile/mo_hours.jpg) 1x,
          url(../${background}/Mobile/mo_hours@2x.jpg) 2x,
          url(../${background}/Mobile/mo_hours@3x.jpg) 3x
          )`;

      case '3':
        return `image-set(
          url(../${background}/Mobile/mo_ex.jpg) 1x,
          url(../${background}/Mobile/mo_ex@2x.jpg) 2x,
          url(../${background}/Mobile/mo_ex@3x.jpg) 3x
          )`;

      default:
        break;
    }
  }};
  background-size: 298px 571px;

  @media screen and (min-width: 768px) {
    right: -12px;
    width: 437px;
    height: 893px;

    background-image: ${props => {
      switch (props.keyword) {
        case 'main':
          return `image-set(
            url(${background}/Tablet/ta_main.jpg) 1x,
            url(${background}/Tablet/ta_main@2x.jpg) 2x,
            url(${background}/Tablet/ta_main@3x.jpg) 3x,
            )`;

        case '1':
          return `image-set(
            url(../${background}/Tablet/ta_users.jpg) 1x,
            url(../${background}/Tablet/ta_users@2x.jpg) 2x,
            url(../${background}/Tablet/ta_users@3x.jpg) 3x,
            )`;

        case '2':
          return `image-set(
            url(../${background}/Tablet/ta_hours.jpg) 1x,
            url(../${background}/Tablet/ta_hours@2x.jpg) 2x,
            url(../${background}/Tablet/ta_hours@3x.jpg) 3x,
            )`;

        case '3':
          return `image-set(
            url(../${background}/Tablet/ta_ex.jpg) 1x,
            url(../${background}/Tablet/ta_ex@2x.jpg) 2x,
            url(../${background}/Tablet/ta_ex@3x.jpg) 3x,
            )`;

        default:
          break;
      }
    }};
    background-size: 437px 893px;

  @media screen and (max-width: 1439px) {
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    right: -96px;
    width: 670px;
    height: 800px;

    background-image: ${props => {
      switch (props.keyword) {
        case 'main':
          return `image-set(
            url(${background}/Desktop/bg_main.jpg) 1x,
            url(${background}/Desktop/bg_main@2x.jpg) 2x,
            url(${background}/Desktop/bg_main@3x.jpg) 3x,
            )`;

        case '1':
          return `image-set(
            url(../${background}/Desktop/bg_users.jpg) 1x,
            url(../${background}/Desktop/bg_users@2x.jpg) 2x,
            url(../${background}/Desktop/bg_users@3x.jpg) 3x,
            )`;

        case '2':
          return `image-set(
            url(../${background}/Desktop/bg_hours.jpg) 1x,
            url(../${background}/Desktop/bg_hours@2x.jpg) 2x,
            url(../${background}/Desktop/bg_hours@3x.jpg) 3x,
            )`;

        case '3':
          return `image-set(
            url(../${background}/Desktop/bg_ex.jpg) 1x,
            url(../${background}/Desktop/bg_ex@2x.jpg) 2x,
            url(../${background}/Desktop/bg_ex@3x.jpg) 3x,
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
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const DarkBlock = styled(Block)`
  bottom: 186px;
  left: 44px;
  align-items: center;
  gap: 8px;
  background-color: #303030;

  @media screen and (min-width: 768px) {
    bottom: 214px;
    left: 0;
    gap: 12px;
    padding: 20px 36px 20px 23px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 320px;
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
  bottom: 40px;
  right: 20px;
  align-items: flex-end;
  gap: 8px;
  padding-right: 37px;
  background-color: #ef8964;

  @media screen and (min-width: 768px) {
    bottom: 48px;
    right: 32px;
    gap: 11px;
    padding: 14px 38px 14px 28px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 171px;
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
