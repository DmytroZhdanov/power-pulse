import { useState } from 'react';
import {
  AddProductModal,
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
  const { onClose } = props;
  const [weight, setWeight] = useState(100);
  const product = 'name of product';
  const amount = 25;
  const calories = weight * amount;

  const handleSubmit = () => {
    console.log(
      'send to backEnd product:',
      product,
      'Grams:',
      weight,
      'Calories:',
      calories,
    );
  };

  return (
    <AddProductModal className="modal-content">
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
        <ValueCalories>{calories}</ValueCalories>
      </DivCalories>
      <DivBtn>
        <ButtonAdd onClick={handleSubmit}>Add to diary</ButtonAdd>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      </DivBtn>
    </AddProductModal>
  );
}
