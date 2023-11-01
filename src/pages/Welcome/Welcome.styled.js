import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ROUTER } from 'src/utils/constants';
import bg_line from 'src/assets/images/background/bg_line.png';

export const ContainerDiv = styled.div`
  width: calc(100% - 40px);
  padding-top: 127px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 189px;
  }

  @media screen and (max-width: 1439px) {
    position: absolute;
    z-index: 2;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 598px;
    padding-top: 200px;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 38px;
  font-weight: 500;
  line-height: calc(40 / 38);
  margin-bottom: 40px;
  letter-spacing: 0.38px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 70px;
    line-height: calc(78 / 70);
    margin-bottom: 64px;
    letter-spacing: 0.7px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 598px;
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
    background: url(${bg_line}) no-repeat 50% 50%;
    background-size: 98px 35px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      top: 8px;
      left: -16px;
      width: 185px;
      height: 67px;
      background-size: 185px 67px;
    }
  }
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 13px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 20px;
  }
`;

export const ButtonLink = styled(Link)`
  display: block;
  padding: 12px 40px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  background-color: ${({ to, theme }) => {
    switch (to) {
      case `../${ROUTER.SIGN_UP}`:
        return `${theme.color.orangeFirst}`;

      case `../${ROUTER.SIGN_IN}`:
        return 'transparent';

      default:
        break;
    }
  }};

  border: ${({ to, theme }) => {
    switch (to) {
      case `../${ROUTER.SIGN_UP}`:
        return 'none';

      case `../${ROUTER.SIGN_IN}`:
        return `1px solid ${theme.color.border}`;

      default:
        break;
    }
  }};

  transition:
    background-color ${({ theme }) => theme.transition.main},
    border ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background-color: ${({ to, theme }) => {
      switch (to) {
        case `../${ROUTER.SIGN_UP}`:
          return `${theme.color.hover}`;

        case `../${ROUTER.SIGN_IN}`:
          return 'transparent';

        default:
          break;
      }
    }};

    border: ${({ to, theme }) => {
      switch (to) {
        case `../${ROUTER.SIGN_UP}`:
          return 'none';

        case `../${ROUTER.SIGN_IN}`:
          return `1px solid ${theme.color.hoverBorder}`;

        default:
          break;
      }
    }};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;
