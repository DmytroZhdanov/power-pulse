import styled from '@emotion/styled';
import * as background from 'src/utils/background';

const categoryImages = {
  Alcoholicdrinks: `url(${background.Alcoholicdrinks})`,
  Berries: `url(${background.Berries})`,
  Cereals: `url(${background.Cereals})`,
  Dairy: `url(${background.Dairy})`,
  Driedfruits: `url(${background.Driedfruits})`,
  Eggs: `url(${background.Eggs})`,
  Fish: `url(${background.Fish})`,
  Flour: `url(${background.Flour})`,
  Fruits: `url(${background.Fruits})`,
  Meat: `url(${background.Meat})`,
  Mushrooms: `url(${background.Mushrooms})`,
  Nuts: `url(${background.Nuts})`,
  Oilsandfats: `url(${background.Oilsandfats})`,
  Poppy: `url(${background.Poppy})`,
  Sausage: `url(${background.Sausage})`,
  Seeds: `url(${background.Seeds})`,
  Sesame: `url(${background.Sesame})`,
  Softdrinks: `url(${background.Softdrinks})`,
  Vegetablesandherbs: `url(${background.Vegetablesandherbs})`,
};

export const BackgroundDiv = styled.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: linear-gradient(90deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
    linear-gradient(180deg, #040404 1.1%, rgba(4, 4, 4, 0) 50.79%),
    ${props =>
      categoryImages[props?.filter] ||
      `image-set(
    url(${background.bg_eating}) 1x,
    url(${background.bg_eating2x}) 2x,
      url(${background.bg_eating3x}) 3x)`},
    no-repeat;
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
