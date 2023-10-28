import styled from '@emotion/styled';

import {
  ProductCard,
  ProductHeader,
  Diet,
  RecommendDiv,
  ProductTitle,
  Product,
  Button,
  BtnText,
  Text,
} from '../../products/ProductsItem/ProductsItem.styled';

export const ExercisesWrap = styled(ProductHeader)`
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;
export const SvgRunMan = styled.svg`
  max-width: 24px;
  max-height: 24px;
`;
export const SvgArrow = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Title = styled(Diet)``;
export const Box = styled(RecommendDiv)``;
export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    /* height: 18px; */
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
  @media screen and (max-width: 768px) {
    text-transform: none;
    display: flex;
    gap: 4px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 4px;
  }
`;
export const Values = styled.span`
  padding-left: 0;
  color: #efede8;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const ExercisesCard = styled(ProductCard)`
  max-height: 163px;
  @media screen and (min-width: 1440px) {
    &:hover {
      background-image: url(${props => props.gifUrl});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      background-color: #ffffff;
    }
  }
`;
