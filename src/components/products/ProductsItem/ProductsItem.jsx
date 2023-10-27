import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddProductForm from 'components/products/AddProductForm/AddProductForm';
import AddProductSuccess from 'components/products/AddProductSuccess/AddProductSuccess';
import {
  ProductCard,
  ProductHeader,
  Diet,
  Indicator,
  RecommendDiv,
  Description,
  ProductTitle,
  Product,
  RecommendText,
  Button,
  BtnText,
  Text,
  Value,
} from './ProductsItem.styled';
import { useState } from 'react';

export default function ProductsItem({ props }) {
  const recommended = true;
  const { weight, calories, category, title } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddProdSucces, setIsAddProdSuccess] = useState(false);
  const [totalCallories, setTotalCalories] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddProdSuccess(false);
  };

  const addProdSuccess = totalCalories => {
    setIsAddProdSuccess(true);
    setTotalCalories(totalCalories);
  };

  return (
    <>
      <ProductCard>
        <ProductHeader>
          <Diet>DIET</Diet>

          <RecommendDiv>
            <Indicator recommended={recommended} />

            <RecommendText>
              {recommended ? 'Recommended' : 'Not recommended'}
            </RecommendText>

            <Button onClick={openModal}>
              <BtnText>Add</BtnText>

              <svg width="16" height="16">
                <use href="/src/assets/images/sprite/sprite.svg#arrow-add-prod-orange"></use>
              </svg>
            </Button>
          </RecommendDiv>
        </ProductHeader>

        <Product>
          <svg width="24" height="24">
            <use href="/src/assets/images/sprite/sprite.svg#run-man"></use>
          </svg>

          <ProductTitle>{title}</ProductTitle>
        </Product>

        <Description>
          <Text>
            Calories:<Value>{calories}</Value>
          </Text>

          <Text category={true}>
            Category:<Value>{category}</Value>
          </Text>

          <Text>
            Weight:<Value>{weight}</Value>
          </Text>
        </Description>
      </ProductCard>

      {isModalOpen && (
        <BasicModalWindow onClose={closeModal}>
          <AddProductForm
            onClose={closeModal}
            addProdSuccess={addProdSuccess}
            calories={calories}
          />
        </BasicModalWindow>
      )}

      {isAddProdSucces && (
        <BasicModalWindow onClose={closeModal}>
          <AddProductSuccess
            onClose={closeModal}
            totalCalories={totalCallories}
          />
        </BasicModalWindow>
      )}
    </>
  );
}
