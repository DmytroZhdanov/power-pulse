import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import AddProductFromPastDaysForm from 'components/products/AddProductFromPastDaysForm/AddProductFromPastDaysForm';
import {
  DivAddForm,
  DivInputs,
  InputName,
  DivGrams,
  InputGrams,
  SpanPlaceholder,
  DivCalories,
  DivBtn,
  PCalories,
  SpanValueCalories,
  ButtonAdd,
  ButtonCancel,
  DivWrapperDate,
} from './AddProductForm.styled';

import { useAddProductMutation } from 'src/redux/api';
import { setStates } from 'src/redux/states/statesSlice';

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
  const dispatch = useDispatch();

  const { onClose, addProdSuccess, addProdError, product } = props;
  const { weight, calories, _id, title } = product;
  const [addWeight, setAddWeight] = useState(weight);
  const totalCalories = (addWeight * calories) / 100;

  const [addProduct, { isLoading, isError, error }] = useAddProductMutation();

  const addProductToCollection = {
    product_ID: _id,
    date: format(new Date(selectedDate), 'yyyy-MM-dd'),
    amount: addWeight,
    calories: totalCalories,
  };

  useEffect(() => {
    dispatch(setStates({ isLoading, isError, error }));
  }, [dispatch, error, isError, isLoading]);

  const handleSubmit = async () => {
    const { error } = await addProduct(addProductToCollection);

    if (error) {
      addProdError(error.data.message);
    } else {
      onClose();
      addProdSuccess(totalCalories);
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

          <SpanPlaceholder>grams</SpanPlaceholder>
        </DivGrams>
      </DivInputs>

      <DivWrapperDate>
        <AddProductFromPastDaysForm
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <DivCalories>
          <PCalories>Calories:</PCalories>

          <SpanValueCalories>{totalCalories}</SpanValueCalories>
        </DivCalories>
      </DivWrapperDate>

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
