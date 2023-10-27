import styled from '@emotion/styled';

import {
  ProductCard,
  ProductHeader,
  Diet,
  RecommendDiv,
  Description,
  ProductTitle,
  Product,
  Button,
  BtnText,
  Text,
  Value,
} from '../../products/ProductsItem/ProductsItem.styled';

export const ExercisesCard = styled(ProductCard)`
  max-height: 163px;
  @media screen and (min-width: 1440px) {
    max-height: 141px;
  }
`;

export const ExercisesWrap = styled(ProductHeader)`
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;
export const Title = styled(Diet)``;
export const Box = styled(RecommendDiv)``;
export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    height: 18px;
  }
`;
export const ExerciseName = styled(ProductTitle)``;
export const ExerciseDiv = styled(Product)`
  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;
export const ButtonStart = styled(Button)``;
export const ButtonTitle = styled(BtnText)``;
export const Category = styled(Text)`
  text-transform: none;
  display: flex;
  gap: 4px;
`;
export const Values = styled.span`
  padding-left: 0;
  color: #efede8;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;
