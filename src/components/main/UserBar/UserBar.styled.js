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
  stroke: ${({ theme }) => theme.color.greyFirst};

  width: 24px;
  height: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 28px;
    height: 28px;
  }
`;
export const AvatarWrapDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
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
  margin-right: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 46px;
    margin-right: 16px;
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
