import { motion, AnimatePresence } from 'framer-motion';
import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import ProductsTable from 'components/diary/ProductsTable/ProductsTable';
import {
  DayProdDiv,
  DayProdTextP,
  LoaderDiv,
  DayProdTitleH2,
  DayProdListDiv,
  AddProdBtnLink,
  AddProdBtnIcon,
  AddProdBtnTextP,
} from './DayProducts.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';
import { useTranslation } from 'react-i18next';

export default function DayProducts({
  diaryProducts,
  setDiaryProducts,
  isLoading,
}) {

  const { t } = useTranslation(['Diary']);
  return (
    <DayProdDiv>
      <DayProdListDiv>
        <DayProdTitleH2>{t('content.products.title', { ns: 'Diary' })}</DayProdTitleH2>

        <AddProdBtnLink to="/Products">
          <AddProdBtnTextP>{t('content.products.buttons.addProduct', { ns: 'Diary' })}</AddProdBtnTextP>

          <AddProdBtnIcon>
            <use href={`${sprite}#big_arrow`}></use>
          </AddProdBtnIcon>
        </AddProdBtnLink>
      </DayProdListDiv>

      {diaryProducts && diaryProducts.length !== 0 ? (
        <ProductsTable
          setDiaryProducts={setDiaryProducts}
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
              <DayProdTextP
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
              >
             {t('content.products.defaultValue', { ns: 'Diary' })}
              </DayProdTextP>
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
