import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ExerciseListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    overflow-y: scroll;
    row-gap: 32px;
    column-gap: 16px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) and (max-width: 1439px) {
    max-height: 610px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 850px;
    max-height: 495px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const LinkTextP = styled.p`
  color: ${({ theme }) => theme.color.grayThird};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    line-height: calc(24 / 16);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: -25px;
  left: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: absolute;
    top: -40px;
    left: 0;
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.color.grayThird};
`;

export const BackgroundDiv = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
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
      linear-gradient(to right, ${({ theme }) => theme.gradient.exersises}),
      url(${props => props.img}),
      lightgray 0px -48px / 94.516% 105.335% no-repeat;
    background-size: cover;
    background-position: right;
  }
`;
