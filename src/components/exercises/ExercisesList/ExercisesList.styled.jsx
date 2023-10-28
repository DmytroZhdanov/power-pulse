import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ProductList } from '../../products/ProductsList/ProductsList.styled';

export const ExerciseList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (min-width: 768px) {
    overflow-y: scroll;
    row-gap: 32px;
    column-gap: 16px;
    height: 610px;
  }
  @media (min-width: 1440px) {
    max-width: 850px;
  }
`;
export const LinkText = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    line-height: calc(24 / 16);
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: -35px;
  left: 0;
`;
export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.4);
`;
export const Wrap = styled.div``;
export const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 35%;
`;
