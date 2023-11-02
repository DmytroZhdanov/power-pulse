import PropTypes from 'prop-types';

import {
  DivSuccess,
  DivImg,
  TitleH2,
  DivCalories,
  CaloriesP,
  ValueCaloriesSpan,
  ButtonAdd,
  DivLink,
  LinkText,
} from './AddProductSuccess.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { ROUTER } from 'src/utils/constants';

export default function AddProductSuccess({ onClose, totalCalories }) {
  return (
    <DivSuccess>
      <DivImg></DivImg>

      <TitleH2>Well Done</TitleH2>

      <DivCalories>
        <CaloriesP>Calories:</CaloriesP>

        <ValueCaloriesSpan>{totalCalories}</ValueCaloriesSpan>
      </DivCalories>

      <ButtonAdd onClick={onClose}>Next product</ButtonAdd>

      <DivLink to={`/${ROUTER.DIARY}`}>
        <LinkText>To the diary</LinkText>

        <svg width="16" height="16">
          <use href={sprite + '#arrow-add-prod'}></use>
        </svg>
      </DivLink>
    </DivSuccess>
  );
}

AddProductSuccess.propTypes = {
  totalCalories: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};
