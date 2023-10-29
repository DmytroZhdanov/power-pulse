import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  bg_exercises,
  bg_exercises2x,
  bg_exercises3x,
  bg_hours,
  bg_hours2x,
  bg_hours3x,
  bg_eating,
  bg_eating2x,
  bg_eating3x,
  man,
  woman,
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
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    max-height: 610px;
  }

  @media (min-width: 1440px) {
    max-width: 850px;
    max-height: 495px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
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

    width: 600px;
    height: 715px;
    background-repeat: no-repeat;
    z-index: -2;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background:
      linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 1%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 0.7) 40%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.5) 100%,
        rgba(0, 0, 0, 0.3) 100%
      ),
      url(${props => props.img}),
      lightgray 0px -48px / 94.516% 105.335% no-repeat;

    background-size: cover;
    background-position: right;
  }
`;

export const Content = styled.div``;
