import { useState } from 'react';
import {
<<<<<<< HEAD
=======
  DivAdddForm,
  DivInputs,
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
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
<<<<<<< HEAD
  const { onClose, addProdSuccess, calories } = props;
  const [weight, setWeight] = useState(100);
  const product = 'name of product';

  const totalCalories = weight * calories;
=======
  const { onClose, addProdSuccess, product } = props;
  const [weight, setWeight] = useState(100);
  const totalCalories = weight * product.calories;
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9

  const handleSubmit = () => {
    onClose();
    addProdSuccess(totalCalories);
  };

  return (
<<<<<<< HEAD
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

=======
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
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
      <DivCalories>
        <Calories>Calories:</Calories>
        <ValueCalories>{totalCalories}</ValueCalories>
      </DivCalories>
      <DivBtn>
        <ButtonAdd onClick={handleSubmit}>Add to diary</ButtonAdd>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      </DivBtn>
<<<<<<< HEAD
    </>
=======
    </DivAdddForm>
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  );
}
