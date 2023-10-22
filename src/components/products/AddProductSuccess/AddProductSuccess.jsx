import {
  DivSucces,
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
    <DivSucces>
      <DivImg></DivImg>
      <Title>Well Done</Title>
      <DivCalories>
        <Calories>Calories:</Calories>
        <ValueCalories>{totalCalories}</ValueCalories>
      </DivCalories>

      <ButtonAdd onClick={onClose}>Next product</ButtonAdd>

      <DivLink href="Diary">
        <LinkText>To the diary</LinkText>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1"
            stroke="#EFEDE8"
            stroke-opacity="0.3"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </DivLink>
    </DivSucces>
  );
}
