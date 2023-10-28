import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddProductForm from 'components/products/AddProductForm/AddProductForm';
import AddProductSuccess from 'components/products/AddProductSuccess/AddProductSuccess';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  ProductCard,
  ProductHeader,
  Diet,
  Indicator,
  RecommendDiv,
  Description,
  ProductTitle,
  Product,
  SvgProd,
  RecommendText,
  Button,
  BtnText,
  SvgAdd,
  Text,
  Value,
} from './ProductsItem.styled';
import { useState } from 'react';

export default function ProductsItem({ props, userGroupBlood }) {
  const { weight, calories, category, title, groupBloodNotAllowed } = props;

  const recommended = groupBloodNotAllowed[userGroupBlood];

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
            <Indicator recommended={!recommended} />

            <RecommendText>
              {recommended ? 'Not recommended' : 'Recommended'}
            </RecommendText>

            <Button onClick={openModal}>
              <BtnText>Add</BtnText>

              <SvgAdd>
                <use href={`${sprite}#arrow-add-prod-orange`}></use>
              </SvgAdd>
            </Button>
          </RecommendDiv>
        </ProductHeader>

        <Product>
          <SvgProd>
            <use href={`${sprite}#run-man`}></use>
          </SvgProd>

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
            product={props}
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
