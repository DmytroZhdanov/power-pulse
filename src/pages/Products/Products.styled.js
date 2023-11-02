import styled from '@emotion/styled';
import {
  bg_eating,
  bg_eating2x,
  bg_eating3x,
  bg_hours,
  mo_main,
  mo_ex,
  Alcoholicdrinks,
  Berries,
} from 'src/utils/background';

const categoryImages = {
  Alcoholicdrinks: `url(${Alcoholicdrinks})`,
  Berries: `url(${Berries})`,
  Cereals: `url(${bg_eating})`,
  Dairy: `url(${mo_ex})`,
  Driedfruits: `url(${mo_ex})`,
  Eggs: `url(${mo_ex})`,
  Fish: `url(${mo_ex})`,
  Flour: `url(${mo_ex})`,
  Fruits: `url(${mo_ex})`,
  Meat: `url(${mo_ex})`,
  Mushrooms: `url(${mo_ex})`,
  Nuts: `url(${mo_ex})`,
  Oilsandfats: `url(${mo_ex})`,
  Poppy: `url(${mo_ex})`,
  Sausage: `url(${mo_ex})`,
  Seeds: `url(${mo_ex})`,
  Sesame: `url(${mo_ex})`,
  Softdrinks: `url(${mo_ex})`,
  Vegetablesandherbs: `url(${mo_ex})`,
};

export const BackgroundDiv = styled.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;

  background-image: ${props =>
    categoryImages[props?.filter] ||
    `image-set(
    url(${bg_eating}) 1x,
    url(${bg_eating2x}) 2x,
      url(${bg_eating3x}) 3x)`};

  background-size: 428px 716px;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 32px;
    margin-top: 72px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: 72px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
