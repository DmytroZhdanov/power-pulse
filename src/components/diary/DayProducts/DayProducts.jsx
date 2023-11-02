import { motion, AnimatePresence } from 'framer-motion';
import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import ProductsTable from '../ProductsTable/ProductsTable';
import {
  DayProdDiv,
  DayProdText,
  LoaderDiv,
  DayProdTitle,
  DayProdDivList,
  AddProdBtn,
  AddProdBtnIcon,
  AddProdBtnText,
} from './DayProducts.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';
import { useFetchUserBloodGroupQuery } from 'src/redux/api';

export default function DayProducts({
  diaryProducts,
  setDiaryProducts,
  isLoading,
}) {
  const { data } = useFetchUserBloodGroupQuery();
  return (
    <DayProdDiv>
      <DayProdDivList>
        <DayProdTitle>Products</DayProdTitle>
        <AddProdBtn to="/Products">
          <AddProdBtnText>Add product</AddProdBtnText>
          <AddProdBtnIcon>
            <use href={`${sprite}#big_arrow`}></use>
          </AddProdBtnIcon>
        </AddProdBtn>
      </DayProdDivList>
      {diaryProducts && diaryProducts.length !== 0 ? (
        <ProductsTable
          setDiaryProducts={setDiaryProducts}
          blood={data}
          diaryProducts={diaryProducts}
        />
      ) : (
        <>
          <AnimatePresence>
            {isLoading ? (
              <LoaderDiv>
                <TailSpin color="#E6533C" ariaLabel="three-dots-loading" />
              </LoaderDiv>
            ) : (
              <DayProdText
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
              >
                Not found products
              </DayProdText>
            )}
          </AnimatePresence>
        </>
      )}
    </DayProdDiv>
  );
}

DayProducts.propTypes = {
  isLoading: PropTypes.bool,

  diaryProducts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      groupBloodNotAllowed: PropTypes.shape({
        1: PropTypes.bool.isRequired,
        2: PropTypes.bool.isRequired,
        3: PropTypes.bool.isRequired,
        4: PropTypes.bool.isRequired,
      }),
      product_ID: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setDiaryProducts: PropTypes.func.isRequired,
};
