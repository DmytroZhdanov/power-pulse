import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

export const SvgIcon = styled.svg`
  width: 36px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 17px;
  }
`;
export const Title = styled.p`
  color: #efede8;
  font-size: 17px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.17;
  }
`;
