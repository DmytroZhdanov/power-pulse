import { useState } from 'react';
import PropTypes from 'prop-types';

import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddProductForm from 'components/products/AddProductForm/AddProductForm';
import AddProductSuccess from 'components/products/AddProductSuccess/AddProductSuccess';
import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';
import {
  ProductCardDiv,
  ProductHeaderDiv,
  DietP,
  IndicatorDiv,
  RecommendDiv,
  DescriptionDiv,
  ProductTitleH2,
  ProductDiv,
  SvgProd,
  RecommendTextP,
  Button,
  BtnTextP,
  SvgAdd,
  TextP,
  ValueSpan,
} from './ProductsItem.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';

/**
 * The ProductsItem component represents an individual product list item and displays product information.
 *
 * @param {object} props An object containing information about the product.
 * @param {string} userGroupBlood User's blood group.
 * @returns {JSX.Element} A product list item with product information and recommendations.
 */
export default function ProductsItem({ props, userGroupBlood }) {
  const { weight, calories, category, title, groupBloodNotAllowed } = props;
  const recommended = groupBloodNotAllowed[userGroupBlood];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddProdSuccess, setIsAddProdSuccess] = useState(false);
  const [isAddProdError, setIsAddProdError] = useState(false);
  const [totalCalories, setTotalCalories] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Opens a modal window for adding a product.
   *
   * @function openModal
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Closes the modal window for adding a product.
   *
   * @function closeModal
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddProdSuccess(false);
    setIsAddProdError(false);
  };

  /**
   * Handles the successful addition of a product, closes the modal window, and sends the total calorie value of this product to the backend through props.
   *
   * @function addProdSuccess
   * @param {number} totalCalories The total calorie count of the added products.
   */
  const addProdSuccess = totalCalories => {
    setIsAddProdSuccess(true);
    setTotalCalories(totalCalories);
  };

  const addProdError = errorMessage => {
    setIsAddProdError(true);
    setErrorMessage(errorMessage);
  };

  return (
    <>
      <ProductCardDiv>
        <ProductHeaderDiv>
          <DietP>DIET</DietP>

          <RecommendDiv>
            <IndicatorDiv recommended={recommended} />

            <RecommendTextP>
              {recommended ? 'Recommended' : 'Not recommended'}
            </RecommendTextP>

            <Button onClick={openModal}>
              <BtnTextP>Add</BtnTextP>

              <SvgAdd>
                <use href={`${sprite}#arrow-add-prod-orange`}></use>
              </SvgAdd>
            </Button>
          </RecommendDiv>
        </ProductHeaderDiv>

        <ProductDiv>
          <SvgProd>
            <use href={`${sprite}#run-man`}></use>
          </SvgProd>

          <ProductTitleH2>{title}</ProductTitleH2>
        </ProductDiv>

        <DescriptionDiv>
          <TextP>
            Calories:<ValueSpan>{calories}</ValueSpan>
          </TextP>

          <TextP category={true}>
            Category:<ValueSpan>{category}</ValueSpan>
          </TextP>

          <TextP>
            Weight:<ValueSpan>{weight}</ValueSpan>
          </TextP>
        </DescriptionDiv>
      </ProductCardDiv>

      <BasicModalWindow onClose={closeModal} onShow={isModalOpen}>
        <AddProductForm
          onClose={closeModal}
          addProdSuccess={addProdSuccess}
          product={props}
          addProdError={addProdError}
        />
      </BasicModalWindow>

      <BasicModalWindow onClose={closeModal} onShow={isAddProdSuccess}>
        <AddProductSuccess
          onClose={closeModal}
          totalCalories={totalCalories}
          addProdError={addProdError}
        />
      </BasicModalWindow>

      <BasicModalWindow onClose={closeModal} onShow={isAddProdError}>
        <ErrorMessage message={errorMessage} onClose={closeModal} />
      </BasicModalWindow>
    </>
  );
}

ProductsItem.propTypes = {
  props: PropTypes.shape({
    weight: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    groupBloodNotAllowed: PropTypes.object.isRequired,
  }).isRequired,
  userGroupBlood: PropTypes.number,
};
