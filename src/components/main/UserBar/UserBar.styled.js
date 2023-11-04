import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SettingsLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 16px;
    margin-right: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: 32px;
  }
`;

export const SvgSettings = styled.svg`
  transition: stroke ${({ theme }) => theme.transition.main};
  stroke: ${({ theme }) => theme.color.grayThird};

  width: 24px;
  height: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 28px;
    height: 28px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    &:hover {
      stroke: ${({ theme }) => theme.color.graySecond};
    }
  }
`;

export const AvatarDiv = styled.div`
  cursor: pointer;
  width: 37px;
  height: 37px;
  background-color: #111111;
  border: 1px solid ${({ theme }) => theme.color.orangeFirst};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-right: 14px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.color.orangeFirst};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 46px;
    height: 46px;
    margin-right: 16px;
  }
`;
export const AvatarModalDiv = styled.div`
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 140px;

  height: 140px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 250px;

    height: 250px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 350px;

    height: 350px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 450px;

    height: 450px;
  }
`;

export const SvgDefault = styled.svg`
  stroke: ${({ theme }) => theme.color.grayFirst};

  width: 21px;
  height: 21px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 24px;
    height: 24px;
  }
`;
