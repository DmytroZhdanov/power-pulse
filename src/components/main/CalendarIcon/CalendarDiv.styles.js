import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CalendarLink = styled(Link)`
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  margin-right: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-right: 14px;
  }
`;

export const SvgIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.color.grayThird};
  &:hover {
    stroke: ${({ theme }) => theme.color.graySecond};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 30px;
    height: 30px;
  }
`;
