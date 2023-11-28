import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import {
  TableDiv,
  Table,
  TableMainTitlesThead,
  TableTitleTr,
  TableMainTitleTh,
  TableBody,
  TableInfoTd,
  DelBtnTableButton,
  DelIcon,
  TableRecomSpan,
} from './ProductsTable.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  useDeleteProductMutation,
  useFetchUserBloodGroupQuery,
} from 'src/redux/api';
import { useTranslation } from 'react-i18next';
import { setStates } from 'src/redux/states/statesSlice';

export default function ProductsTable({ diaryProducts, setDiaryProducts }) {
  const [
    deleteProduct,
    {
      isLoading: isDeleteProductLoading,
      isError: isDeleteProductError,
      error: deleteProductError,
    },
  ] = useDeleteProductMutation();

  const {
    data: userBloodGroup,
    isFetching: isUserBloodLoading,
    isError: isUserBloodError,
    error: userBloodError,
  } = useFetchUserBloodGroupQuery();

  const dispatch = useDispatch();
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

  const { t } = useTranslation(['Diary']);
  const titleList = t(`content.products.list.titles`, {
    ns: 'Diary',
    returnObjects: true,
  });

  useEffect(() => {
    dispatch(
      setStates({
        isLoading: isDeleteProductLoading || isUserBloodLoading,
        isError: isDeleteProductError || isUserBloodError,
        error: deleteProductError || userBloodError,
      }),
    );
  }, [
    deleteProductError,
    dispatch,
    isDeleteProductError,
    isDeleteProductLoading,
    isUserBloodError,
    isUserBloodLoading,
    userBloodError,
  ]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsTablet(window.innerWidth >= 768);
  };

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
        {isTablet ? (
          <Table>
            <TableMainTitlesThead>
              <TableTitleTr>
                {titleList.map(title => (
                  <TableMainTitleTh key={title}>{title}</TableMainTitleTh>
                ))}
              </TableTitleTr>
            </TableMainTitlesThead>

            <AnimatePresence>
              {diaryProducts &&
                diaryProducts.length !== 0 &&
                diaryProducts.map(product => {
                  const isRecommended = !product.groupBloodNotAllowed[
                    userBloodGroup
                  ]
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
                      <tr>
                        <TableInfoTd>{product.title}</TableInfoTd>

                        <TableInfoTd>{product.category}</TableInfoTd>

                        <TableInfoTd>{product.calories}</TableInfoTd>

                        <TableInfoTd>{product.amount}</TableInfoTd>

                        <TableInfoTd>
                          <TableRecomSpan recommended={isRecommended} />

                          {isRecommended
                            ? t(`content.products.list.recommend.yes`, {
                                ns: 'Diary',
                              })
                            : t(`content.products.list.recommend.no`, {
                                ns: 'Diary',
                              })}
                        </TableInfoTd>

                        <td>
                          <DelBtnTableButton
                            onClick={() => {
                              handleDeleteProduct(product._id);
                            }}
                          >
                            <DelIcon>
                              <use href={`${sprite}#delete`}></use>
                            </DelIcon>
                          </DelBtnTableButton>
                        </td>
                      </tr>
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
                    product.groupBloodNotAllowed[userBloodGroup] === false
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
                      <TableMainTitlesThead>
                        <TableTitleTr>
                          {titleList.map(title => (
                            <TableMainTitleTh key={title}>
                              {title}
                            </TableMainTitleTh>
                          ))}
                        </TableTitleTr>
                      </TableMainTitlesThead>

                      <TableBody>
                        <tr>
                          <TableInfoTd>{product.title}</TableInfoTd>

                          <TableInfoTd>{product.category}</TableInfoTd>

                          <TableInfoTd>{product.calories}</TableInfoTd>

                          <TableInfoTd>{product.amount}</TableInfoTd>

                          <TableInfoTd>
                            <TableRecomSpan recommended={isRecommended} />

                            {isRecommended
                              ? t(`content.products.list.recommend.yes`, {
                                  ns: 'Diary',
                                })
                              : t(`content.products.list.recommend.no`, {
                                  ns: 'Diary',
                                })}
                          </TableInfoTd>

                          <td>
                            <DelBtnTableButton
                              onClick={() => {
                                handleDeleteProduct(product._id);
                              }}
                            >
                              <DelIcon>
                                <use href={`${sprite}#delete`}></use>
                              </DelIcon>
                            </DelBtnTableButton>
                          </td>
                        </tr>
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
