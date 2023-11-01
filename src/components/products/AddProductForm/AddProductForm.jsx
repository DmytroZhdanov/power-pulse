import { useState } from 'react';
import PropTypes from 'prop-types';
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
  WrapperDate,
} from './AddProductForm.styled';
import { useAddProductMutation } from '../../../redux/api';
import AddProductFromPastDaysForm from '../AddProductFromPastDaysForm/AddProductFromPastDaysForm';

/**
 * The AddProductForm component provides a form for adding a product to a user's diary.
 *
 * @param {Object} props - The component's props.
 * @param {Function} props.onClose - A callback function to close the form.
 * @param {Function} props.addProdSuccess - A callback function to handle successful product addition.
 * @param {Function} props.addProdError - A callback function to handle product addition errors.
 * @param {Object} props.product - The product to be added.
 * @param {number} props.product.weight - The weight of the product.
 * @param {number} props.product.calories - The calories in the product.
 * @returns {JSX.Element} The AddProductForm component.
 */

export default function AddProductForm(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { onClose, addProdSuccess, addProdError, product } = props;
  const { weight, calories, _id, title } = product;
  const [addWeight, setAddWeight] = useState(weight);
  const amount = (addWeight * calories) / 100;

  const [addProduct] = useAddProductMutation();

  const addProductToCollection = {
    product_ID: _id,
    date: new Date(selectedDate),
    amount,
    calories,
  };

  const handleSubmit = async () => {
    const { error } = await addProduct(addProductToCollection);
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
        <InputName type="text" value={title} readOnly disabled />
        <DivGrams>
          <InputGrams
            type="number"
            value={addWeight}
            onChange={e => setAddWeight(e.target.value)}
          />
          <Placeholder>grams</Placeholder>
        </DivGrams>
      </DivInputs>
      <WrapperDate>
        <AddProductFromPastDaysForm
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <DivCalories>
          <Calories>Calories:</Calories>
          <ValueCalories>{amount}</ValueCalories>
        </DivCalories>
      </WrapperDate>

      <DivBtn>
        <ButtonAdd onClick={handleSubmit}>Add to diary</ButtonAdd>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      </DivBtn>
    </DivAddForm>
  );
}

AddProductForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  addProdSuccess: PropTypes.func.isRequired,
  addProdError: PropTypes.func.isRequired,
  product: PropTypes.shape({
    weight: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
