import { useState } from 'react';
import {
  InputName,
  DivGrams,
  InputGrams,
  Placeholder,
  DivCalories,
  DivBtn,
  Calories,
  ValueCalories,
  ButtonAdd,
  ButtonCancel,
} from './AddProductForm.styled';

export default function AddProductForm(props) {
  const { onClose, addProdSuccess, calories } = props;
  const [weight, setWeight] = useState(100);
  const product = 'name of product';

  const totalCalories = weight * calories;

  const handleSubmit = () => {
    onClose();
    addProdSuccess(totalCalories);
  };

  return (
    <>
      <InputName type="text" value={product} readOnly />
      <DivGrams>
        <InputGrams
          type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <Placeholder>grams</Placeholder>
      </DivGrams>

      <DivCalories>
        <Calories>Calories:</Calories>
        <ValueCalories>{totalCalories}</ValueCalories>
      </DivCalories>
      <DivBtn>
        <ButtonAdd onClick={handleSubmit}>Add to diary</ButtonAdd>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      </DivBtn>
    </>
  );
}
