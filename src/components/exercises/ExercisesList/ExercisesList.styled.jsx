import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ProductList } from '../../products/ProductsList/ProductsList.styled';

export const ExerciseList = styled(ProductList)``;
export const LinkText = styled.p``;
export const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
`;
export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.4);
`;
