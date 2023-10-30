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
import PropTypes from 'prop-types';

/**
 * Компонент ProductsItem представляет отдельный элемент списка продуктов и отображает информацию о продукте.
 *
 * @param {object} props Объект, содержащий информацию о продукте.
 * @param {string} userGroupBlood Группа крови пользователя.
 * @returns {JSX.Element} Элемент списка продуктов с информацией о продукте и рекомендациями.
 */
export default function ProductsItem({ props, userGroupBlood }) {
  const { weight, calories, category, title, groupBloodNotAllowed } = props;

  const recommended = groupBloodNotAllowed[userGroupBlood];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddProdSuccess, setIsAddProdSuccess] = useState(false);
  const [totalCalories, setTotalCalories] = useState(null);

  /**
   * Открывает модальное окно для добавления продукта.
   *
   * @function openModal
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Закрывает модальное окно добавления продукта..
   *
   * @function closeModal
   */

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddProdSuccess(false);
  };

  /**
   * Обрабатывает успешное добавление продукта и закрывает модальное окно и передает пропсами значение калорий этого продукта на бэкэнд.
   *
   * @function addProdSuccess
   * @param {number} totalCalories Общее количество калорий добавленных продуктов.
   */

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

      {isAddProdSuccess && (
        <BasicModalWindow onClose={closeModal}>
          <AddProductSuccess
            onClose={closeModal}
            totalCalories={totalCalories}
          />
        </BasicModalWindow>
      )}
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
