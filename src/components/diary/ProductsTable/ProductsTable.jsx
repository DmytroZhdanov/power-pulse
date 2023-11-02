import sprite from '../../../assets/images/sprite/sprite.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDeleteProductMutation } from '../../../redux/api';
import {
  TableDiv,
  Table,
  TableMainTitles,
  TableTitleTr,
  TableMainTitle,
  TableBody,
  TableTr,
  TableInfoTd,
  BtnTd,
  DelBtnTable,
  DelIcon,
  TableRecomSpan,
} from './ProductsTable.styled';
import PropTypes from 'prop-types';

export default function ProductsTable({
  diaryProducts,
  setDiaryProducts,
  blood,
}) {
  const [deleteProduct] = useDeleteProductMutation();
  const [isTableDesk, setIsTablDesk] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsTablDesk(window.innerWidth >= 768);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDeleteProduct = async id => {
    try {
      await deleteProduct(id);

      const filteredDiaryProducts = diaryProducts.filter(
        product => product._id !== id,
      );

      setDiaryProducts(filteredDiaryProducts);
    } catch (error) {
      alert('Ops...Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <TableDiv>
        {isTableDesk ? (
          <Table>
            <TableMainTitles>
              <TableTitleTr>
                <TableMainTitle>Title</TableMainTitle>
                <TableMainTitle>Category</TableMainTitle>
                <TableMainTitle>Calories</TableMainTitle>
                <TableMainTitle>Weight</TableMainTitle>
                <TableMainTitle>Recommend</TableMainTitle>
              </TableTitleTr>
            </TableMainTitles>
            <AnimatePresence>
              {diaryProducts &&
                diaryProducts.length !== 0 &&
                diaryProducts.map(product => {
                  const isRecommended = !product.groupBloodNotAllowed[blood]
                    ? true
                    : false;

                  return (
                    <TableBody
                      key={product._id}
                      as={motion.tbody}
                      initial={{ x: 900 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      exit={{ x: -900 }}
                    >
                      <TableTr>
                        <TableInfoTd>{product.title}</TableInfoTd>
                        <TableInfoTd>{product.category}</TableInfoTd>
                        <TableInfoTd>{product.calories}</TableInfoTd>
                        <TableInfoTd>{product.amount}</TableInfoTd>
                        <TableInfoTd>
                          <TableRecomSpan Recom={isRecommended} />
                          {isRecommended ? 'Yes' : 'No'}
                        </TableInfoTd>
                        <BtnTd>
                          <DelBtnTable
                            onClick={() => {
                              handleDeleteProduct(product._id);
                            }}
                          >
                            <DelIcon>
                              <use href={`${sprite}#delete`}></use>
                            </DelIcon>
                          </DelBtnTable>
                        </BtnTd>
                      </TableTr>
                    </TableBody>
                  );
                })}
            </AnimatePresence>
          </Table>
        ) : (
          <>
            <AnimatePresence>
              {diaryProducts &&
                diaryProducts.length !== 0 &&
                diaryProducts.map(product => {
                  const isRecommended =
                    product.groupBloodNotAllowed[blood] === false
                      ? true
                      : false;

                  return (
                    <Table
                      initial={{ x: 900 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      exit={{ x: -900 }}
                      as={motion.table}
                      key={product._id}
                    >
                      <TableMainTitles>
                        <TableTitleTr>
                          <TableMainTitle>Title</TableMainTitle>
                          <TableMainTitle>Category</TableMainTitle>
                          <TableMainTitle>Calories</TableMainTitle>
                          <TableMainTitle>Weight</TableMainTitle>
                          <TableMainTitle>Recommend</TableMainTitle>
                        </TableTitleTr>
                      </TableMainTitles>

                      <TableBody>
                        <TableTr>
                          <TableInfoTd>{product.title}</TableInfoTd>
                          <TableInfoTd>{product.category}</TableInfoTd>
                          <TableInfoTd>{product.calories}</TableInfoTd>
                          <TableInfoTd>{product.amount}</TableInfoTd>
                          <TableInfoTd>
                            <TableRecomSpan Recom={isRecommended} />
                            {isRecommended ? 'Yes' : 'No'}
                          </TableInfoTd>
                          <BtnTd>
                            <DelBtnTable
                              onClick={() => {
                                handleDeleteProduct(product._id);
                              }}
                            >
                              <DelIcon>
                                <use href={`${sprite}#delete`}></use>
                              </DelIcon>
                            </DelBtnTable>
                          </BtnTd>
                        </TableTr>
                      </TableBody>
                    </Table>
                  );
                })}
            </AnimatePresence>
          </>
        )}
      </TableDiv>
    </>
  );
}

ProductsTable.propTypes = {
  blood: PropTypes.number,

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
  ),
  setDiaryProducts: PropTypes.func.isRequired,
};
