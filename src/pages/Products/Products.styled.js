import styled from '@emotion/styled';
import {
  bg_eating,
  bg_eating2x,
  bg_eating3x,
  Alcoholicdrinks,
  Berries,
  Cereals,
  Dairy,
  Driedfruits,
  Eggs,
  Fish,
  Flour,
  Fruits,
  Meat,
  Mushrooms,
  Nuts,
  Oilsandfats,
  Poppy,
  Sausage,
  Seeds,
  Sesame,
  Softdrinks,
  Vegetablesandherbs,
} from 'src/utils/background';

const categoryImages = {
  Alcoholicdrinks: `url(${Alcoholicdrinks})`,
  Berries: `url(${Berries})`,
  Cereals: `url(${Cereals})`,
  Dairy: `url(${Dairy})`,
  Driedfruits: `url(${Driedfruits})`,
  Eggs: `url(${Eggs})`,
  Fish: `url(${Fish})`,
  Flour: `url(${Flour})`,
  Fruits: `url(${Fruits})`,
  Meat: `url(${Meat})`,
  Mushrooms: `url(${Mushrooms})`,
  Nuts: `url(${Nuts})`,
  Oilsandfats: `url(${Oilsandfats})`,
  Poppy: `url(${Poppy})`,
  Sausage: `url(${Sausage})`,
  Seeds: `url(${Seeds})`,
  Sesame: `url(${Sesame})`,
  Softdrinks: `url(${Softdrinks})`,
  Vegetablesandherbs: `url(${Vegetablesandherbs})`,
};

export const BackgroundDiv = styled.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background:
    linear-gradient(90deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
    linear-gradient(180deg, #040404 1.1%, rgba(4, 4, 4, 0) 50.79%),
    ${props =>
      categoryImages[props?.filter] ||
      `image-set(
    url(${bg_eating}) 1x,
    url(${bg_eating2x}) 2x,
      url(${bg_eating3x}) 3x)`},
    lightgray -372.891px -2.705px / 133.568% 100.375% no-repeat;
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
