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
  width: 37px;
  height: 37px;
  background-color: #111111;
  border: 1px solid ${({ theme }) => theme.color.orangeFirst};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 46px;
    height: 46px;
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
