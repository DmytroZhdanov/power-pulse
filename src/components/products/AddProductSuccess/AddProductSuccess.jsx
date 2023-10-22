import {
  DivSuccess,
  DivImg,
  Title,
  DivCalories,
  Calories,
  ValueCalories,
  ButtonAdd,
  DivLink,
  LinkText,
} from './AddProductSuccess.styled';

export default function AddProductSuccess(props) {
  const { onClose, totalCalories } = props;

  return (
    <DivSuccess>
      <DivImg></DivImg>
      <Title>Well Done</Title>
      <DivCalories>
        <Calories>Calories:</Calories>
        <ValueCalories>{totalCalories}</ValueCalories>
      </DivCalories>

      <ButtonAdd onClick={onClose}>Next product</ButtonAdd>

      <DivLink href="Diary">
        <LinkText>To the diary</LinkText>
        <svg width="16" height="16">
          <use href="/src/assets/images/sprite/sprite.svg#arrow-add-prod"></use>
        </svg>
      </DivLink>
    </DivSuccess>
  );
}
