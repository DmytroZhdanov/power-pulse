import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../utils/constants';

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 500;
  line-height: calc(40 / 38);
  margin-top: 127px;
  margin-bottom: 40px;
  letter-spacing: 0.38px;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: calc(78 / 70);
    margin-top: 189px;
    margin-bottom: 64px;
    letter-spacing: 0.7px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 200px;
  }
`;

export const Span = styled.span`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 4px;
    left: -9px;
    width: 98px;
    height: 35px;
    background: url('src/assets/images/background/bg_line.png') no-repeat 50%
      50%;
    background-size: 98px 35px;

    @media screen and (min-width: 768px) {
      top: 8px;
      left: -16px;
      width: 185px;
      height: 67px;
      background-size: 185px 67px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Button = styled(Link)`
  display: block;
  padding: 12px 40px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  background-color: ${props => {
    switch (props.to) {
      case ROUTER.SIGN_UP:
        return '#E6533C';

      case ROUTER.SIGN_IN:
        return 'transparent';

      default:
        break;
    }
  }};

  border: ${props => {
    switch (props.to) {
      case ROUTER.SIGN_UP:
        return 'none';

      case ROUTER.SIGN_IN:
        return '1px solid rgba(239, 237, 232, 0.30)';

      default:
        break;
    }
  }};

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;
