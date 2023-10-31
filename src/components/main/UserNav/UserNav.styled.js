import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 245px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) and (max-width: 1439px) {
    padding-top: 280px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 0;
    display: flex;
    flex-direction: row;
    gap: 16px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;
  }
`;
export const PageLink = styled(NavLink)`
  padding: 10px 27px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayDisabled};
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  &.active {
    background-color: ${({ theme }) => theme.color.hoverBorder};
    border: ${({ border, theme }) =>
      border
        ? `1px solid ${theme.color.white}`
        : `1px solid ${theme.color.grayDisabled}`};
  }

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.color.hoverBorder};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
