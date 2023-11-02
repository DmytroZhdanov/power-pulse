import ProductsTable from '../ProductsTable/ProductsTable';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { TailSpin } from 'react-loader-spinner';
import { motion, AnimatePresence } from 'framer-motion';
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
