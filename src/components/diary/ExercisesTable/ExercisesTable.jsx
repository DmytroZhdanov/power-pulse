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
  TableDiv,
} from './ExercisesTable.styled';
import sprite from '../../../assets/images/sprite/sprite.svg';
export default function ExercisesTable() {
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
  return <>
  <TableDiv>
  {isDesktop ? (
    <Table>
      <TableMainTitles>
        <TableTitleTr>
          <TableMainTitle>Body Part</TableMainTitle>
          <TableMainTitle>Equipment</TableMainTitle>
          <TableMainTitle>Name</TableMainTitle>
          <TableMainTitle>Target</TableMainTitle>
          {/* <TableMainTitle>Burned Calories</TableMainTitle> */}
          <TableMainTitle>Burned Calo</TableMainTitle>
          <TableMainTitle>Time</TableMainTitle>
        </TableTitleTr>
      </TableMainTitles>

      <TableBody>
        {/* Тут мапаєш і повертаєш те, що нижче */}
        <TableTr>
          <TableInfoTd>Waist</TableInfoTd>
          <TableInfoTd>Body weight</TableInfoTd>
          <TableInfoTd>3/4 sit-up</TableInfoTd>
          <TableInfoTd>Abs</TableInfoTd>
          <TableInfoTd>220</TableInfoTd>
          <TableInfoTd>60</TableInfoTd>
          <td>
          <DelBtnTable>
            <DelIcon>
              <use href={`${sprite}#delete`}></use>
            </DelIcon>
          </DelBtnTable>
          </td>
        </TableTr>
        <TableTr>
          <TableInfoTd>Waist</TableInfoTd>
          <TableInfoTd>Body weight</TableInfoTd>
          <TableInfoTd>3/4 sit-up</TableInfoTd>
          <TableInfoTd>Abs</TableInfoTd>
          <TableInfoTd>220</TableInfoTd>
          <TableInfoTd>60</TableInfoTd>
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
          <TableInfoTd>Waist</TableInfoTd>
          <TableInfoTd>Body weight</TableInfoTd>
          <TableInfoTd>3/4 sit-up</TableInfoTd>
          <TableInfoTd>Abs</TableInfoTd>
          <TableInfoTd>220</TableInfoTd>
          <TableInfoTd>60</TableInfoTd>
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
          <TableMainTitle>Body Part</TableMainTitle>
          <TableMainTitle>Equipment</TableMainTitle>
          <TableMainTitle>Name</TableMainTitle>
          <TableMainTitle>Target</TableMainTitle>
          <TableMainTitle>Burned Calor</TableMainTitle>
          <TableMainTitle>Time</TableMainTitle>
        </TableTitleTr>
      </TableMainTitles>

      <TableBody>
      <TableTr>
          <TableInfoTd>Waist</TableInfoTd>
          <TableInfoTd>Body weight</TableInfoTd>
          <TableInfoTd>3/4 sit-up</TableInfoTd>
          <TableInfoTd>Abs</TableInfoTd>
          <TableInfoTd>220</TableInfoTd>
          <TableInfoTd>60</TableInfoTd>
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
          <TableMainTitle>Body Part</TableMainTitle>
          <TableMainTitle>Equipment</TableMainTitle>
          <TableMainTitle>Name</TableMainTitle>
          <TableMainTitle>Target</TableMainTitle>
          <TableMainTitle>Burned Calor</TableMainTitle>
          <TableMainTitle>Time</TableMainTitle>
        </TableTitleTr>
      </TableMainTitles>

      <TableBody>
      <TableTr>
          <TableInfoTd>Waist</TableInfoTd>
          <TableInfoTd>Body weight</TableInfoTd>
          <TableInfoTd>3/4 sit-up</TableInfoTd>
          <TableInfoTd>Abs</TableInfoTd>
          <TableInfoTd>220</TableInfoTd>
          <TableInfoTd>60</TableInfoTd>
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
          <TableMainTitle>Body Part</TableMainTitle>
          <TableMainTitle>Equipment</TableMainTitle>
          <TableMainTitle>Name</TableMainTitle>
          <TableMainTitle>Target</TableMainTitle>
          <TableMainTitle>Burned Calor</TableMainTitle>
          <TableMainTitle>Time</TableMainTitle>
        </TableTitleTr>
      </TableMainTitles>

      <TableBody>
      <TableTr>
          <TableInfoTd>Waist</TableInfoTd>
          <TableInfoTd>Body weight</TableInfoTd>
          <TableInfoTd>3/4 sit-up</TableInfoTd>
          <TableInfoTd>Abs</TableInfoTd>
          <TableInfoTd>220</TableInfoTd>
          <TableInfoTd>60</TableInfoTd>
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
}


