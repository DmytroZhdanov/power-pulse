import { useState } from 'react';
import {
  DivAddForm,
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
import { useAddProductMutation } from '../../../redux/api';

export default function AddProductForm(props) {
  const { onClose, addProdSuccess, addProdError, product } = props;
  const { weight, calories, _id } = product;
  const [addWeight, setAddWeight] = useState(weight);
  const amount = addWeight * calories;

  const [addProduct] = useAddProductMutation();

  const addProductToCollection = {
    product_ID: _id,
    date: new Date(),
    amount,
    calories,
  };

  const handleSubmit = async () => {
    const { error } = await addProduct(addProductToCollection);
    console.log('error', error);
    if (error) {
      addProdError(error.data.message);
    } else {
      onClose();
      addProdSuccess(amount);
    }
  };

  return (
    <DivAddForm>
      <DivInputs>
        <InputName type="text" value={product.title} readOnly />
        <DivGrams>
          <InputGrams
            type="number"
            value={addWeight}
            onChange={e => setAddWeight(e.target.value)}
          />
          <Placeholder>grams</Placeholder>
        </DivGrams>
      </DivInputs>
      <DivCalories>
        <Calories>Calories:</Calories>
        <ValueCalories>{amount}</ValueCalories>
      </DivCalories>
      <DivBtn>
        <ButtonAdd onClick={handleSubmit}>Add to diary</ButtonAdd>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      </DivBtn>
    </DivAddForm>
  );
}
