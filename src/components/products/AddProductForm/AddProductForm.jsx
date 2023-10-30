import { useState } from 'react';
import {
  DivAdddForm,
  DivInputs,
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
  const { onClose, addProdSuccess, product } = props;
  const [weight, setWeight] = useState(100);
  const totalCalories = weight * product.calories;

  //  useAddProductMutation;

  const handleSubmit = () => {
    onClose();
    addProdSuccess(totalCalories);
  };

  return (
    <DivAdddForm>
      <DivInputs>
        <InputName type="text" value={product.title} readOnly />
        <DivGrams>
          <InputGrams
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
          <Placeholder>grams</Placeholder>
        </DivGrams>
      </DivInputs>
      <DivCalories>
        <Calories>Calories:</Calories>
        <ValueCalories>{totalCalories}</ValueCalories>
      </DivCalories>
      <DivBtn>
        <ButtonAdd onClick={handleSubmit}>Add to diary</ButtonAdd>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      </DivBtn>
    </DivAdddForm>
  );
}
