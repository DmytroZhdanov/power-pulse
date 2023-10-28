import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  bg_exercises,
  bg_exercises2x,
  bg_exercises3x,
} from 'src/utils/background';
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
    max-height: 495px;
  }
`;
export const LinkText = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    line-height: calc(24 / 16);
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
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: -72px;
    right: -95px;
    width: 478px;
    height: 715px;
    background-repeat: no-repeat;
    z-index: -2;

    background-image: image-set(
      url(${bg_exercises}) 1x,
      url(${bg_exercises2x}) 2x,
      url(${bg_exercises3x}) 3x
    );
    background-size: 478px 715px;
  }
`;

export const Content = styled.div``;
