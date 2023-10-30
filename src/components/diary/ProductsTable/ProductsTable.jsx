import { useEffect, useState } from 'react';
import { useDeleteProductMutation } from '../../../redux/api';
import {
  Table,
  TableMainTitles,
  TableTitleTr,
  TableMainTitle,
  TableBody,
  TableTr,
  TableInfoTd,
  DelBtnTable,
  DelIcon,
  TableRecomSpan,
  TableDiv,
} from './ProductsTable.styled';
import sprite from '../../../assets/images/sprite/sprite.svg';
import { motion, AnimatePresence } from 'framer-motion';
export default function ProductsTable({
  diaryProducts,
  setDiaryProducts,
  blood,
}) {
  const [deleteProduct] = useDeleteProductMutation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
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
        {isDesktop ? (
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
                        <td>
                          <DelBtnTable
                            onClick={() => {
                              handleDeleteProduct(product._id);
                            }}
                          >
                            <DelIcon>
                              <use href={`${sprite}#delete`}></use>
                            </DelIcon>
                          </DelBtnTable>
                        </td>
                      </TableTr>
                    </TableBody>
                  );
                })}
            </AnimatePresence>
          </Table>
        ) : (
          // мапаєш і повертаєщ те, що нижч
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
                          <td>
                            <DelBtnTable
                              onClick={() => {
                                handleDeleteProduct(product._id);
                              }}
                            >
                              <DelIcon>
                                <use href={`${sprite}#delete`}></use>
                              </DelIcon>
                            </DelBtnTable>
                          </td>
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
