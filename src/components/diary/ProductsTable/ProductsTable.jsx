import { useEffect, useState } from 'react';
import {
  Table,
  // TableTd,
  TableTr,
  // TableTh,
  // TableDiv,
  DelBtnTable,
  DelIcon,
  TableRecomSpan,
  // MobTitlesTr,
  TableMainTitle,
  TableMainTitles,
  TableBody,
  TableInfoTd,
  TableTitleTr,
} from './ProductsTable.styled';
import sprite from '../../../assets/images/sprite/sprite.svg';

export default function ProductsTable() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* <TableDiv> */}
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

          <TableBody>
            {/* Тут мапаєш і повертаєш те, що нижче */}
            <TableTr>
              <TableInfoTd>Bread Hercules grain</TableInfoTd>
              <TableInfoTd>Cereals</TableInfoTd>
              <TableInfoTd>289</TableInfoTd>
              <TableInfoTd>100</TableInfoTd>
              <TableRecomSpan Recom={true}>Yes</TableRecomSpan>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
            </TableTr>
            {/* Кінець повернення з мапу */}

            <TableTr>
              <TableInfoTd>Bread Hercules grain</TableInfoTd>
              <TableInfoTd>Cereals</TableInfoTd>
              <TableInfoTd>289</TableInfoTd>
              <TableInfoTd>100</TableInfoTd>
              <TableRecomSpan Recom={true}>Yes</TableRecomSpan>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
            </TableTr>

            <TableTr>
              <TableInfoTd>Bread Hercules grain</TableInfoTd>
              <TableInfoTd>Cereals</TableInfoTd>
              <TableInfoTd>289</TableInfoTd>
              <TableInfoTd>100</TableInfoTd>
              <TableInfoTd>
                <TableRecomSpan Recom={true} />
                Yes
              </TableInfoTd>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
            </TableTr>
          </TableBody>
        </Table>
      ) : (
        // мапаєш і повертаєщ те, що нижче
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

          <TableBody>
            <TableTr>
              <TableInfoTd>Bread Hercules grain</TableInfoTd>
              <TableInfoTd>Cereals</TableInfoTd>
              <TableInfoTd>289</TableInfoTd>
              <TableInfoTd>100</TableInfoTd>
              <TableRecomSpan Recom={true}>Yes</TableRecomSpan>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
            </TableTr>
          </TableBody>
        </Table>
        // Кінець повернення з мапу
      )}
      {/* </TableDiv> */}
    </>
  );
}
