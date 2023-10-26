import { useEffect, useState } from 'react';
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

export default function ProductsTable() {
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

          <TableBody>
            {/* Тут мапаєш і повертаєш те, що нижче */}
            <TableTr>
              <TableInfoTd>Bread Hercules grain</TableInfoTd>
              <TableInfoTd>Cereals</TableInfoTd>
              <TableInfoTd>289</TableInfoTd>
              <TableInfoTd>100</TableInfoTd>
              <TableInfoTd>
                <TableRecomSpan Recom={true} />
                Yes
              </TableInfoTd>
              <td>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
              </td>
            </TableTr>
            {/* Кінець повернення з мапу */}

            <TableTr>
              <TableInfoTd>Bread Hercules grain</TableInfoTd>
              <TableInfoTd>Cereals</TableInfoTd>
              <TableInfoTd>289</TableInfoTd>
              <TableInfoTd>100</TableInfoTd>
              <TableInfoTd>
                <TableRecomSpan Recom={true} />
                Yes
              </TableInfoTd>
              <td>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
              </td>
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
              <td>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
              </td>
            </TableTr>
          </TableBody>
        </Table>
      ) : (
        // мапаєш і повертаєщ те, що нижч
        <>
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
              <TableInfoTd>
                <TableRecomSpan Recom={true} />
                Yes
              </TableInfoTd>
              <td>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
              </td>
            </TableTr>
          </TableBody>
        </Table>
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
              <TableInfoTd>
                <TableRecomSpan Recom={true} />
                Yes
              </TableInfoTd>
              <td>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
              </td>
            </TableTr>
          </TableBody>
        </Table>
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
              <TableInfoTd>
                <TableRecomSpan Recom={true} />
                Yes
              </TableInfoTd>
              <td>
              <DelBtnTable>
                <DelIcon>
                  <use href={`${sprite}#delete`}></use>
                </DelIcon>
              </DelBtnTable>
              </td>
            </TableTr>
          </TableBody>
        </Table>
        </>
        // Кінець повернення з мапу
      )}
      </TableDiv>
    </>
  );
}
