import { useEffect, useState } from 'react';
import {
  Table,
  TableTd,
  TableTr,
  TableTh,
  TableDiv,
  DelBtnTable,
  DelIcon,
  TableRecomSpan,
  MobTitlesTr,
  TableMainTitle,
  TableMainTitles,
  TableBody,
  TableInfoTd
} from './ProductsTable.styled'
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
    <TableDiv>
      {isDesktop ? <Table>
    <TableMainTitles>
      <TableMainTitle>Title</TableMainTitle>
      <TableMainTitle>Category</TableMainTitle>
      <TableMainTitle>Calories</TableMainTitle>
      <TableMainTitle>Weight</TableMainTitle>
      <TableMainTitle>Recommend</TableMainTitle>
    </TableMainTitles>
    <TableBody>
      <TableTr>
        <TableInfoTd>
        <TableTd>Bread Hercules grain</TableTd>
        <TableTd>Cereals</TableTd>
        <TableTd>289</TableTd>
        <TableTd>100</TableTd>
        <TableTd><TableRecomSpan Recom={true}/>Yes</TableTd>
        <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
        </TableInfoTd>
      </TableTr>
      <TableTr>
        <TableInfoTd>
        <TableTd>Bread Hercules grain</TableTd>
        <TableTd>Cereals</TableTd>
        <TableTd>289</TableTd>
        <TableTd>100</TableTd>
        <TableTd><TableRecomSpan Recom={true}/>Yes</TableTd>
        <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
        </TableInfoTd>
      </TableTr>
      <TableTr>
        <TableInfoTd>
        <TableTd>Bread Hercules grain</TableTd>
        <TableTd>Cereals</TableTd>
        <TableTd>289</TableTd>
        <TableTd>100</TableTd>
        <TableTd><TableRecomSpan Recom={true}/>Yes</TableTd>
        <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
        </TableInfoTd>
      </TableTr>
    </TableBody>
   </Table> : 
   <Table>
    <TableMainTitles>
    <TableTh>Title</TableTh>
          <TableTh>Category</TableTh>
          <TableTh>Calories</TableTh>
          <TableTh>Weight</TableTh>
          <TableTh>Recommend</TableTh>
    </TableMainTitles>
    <TableBody>
    <TableInfoTd>
        <TableTd>Bread Hercules grain</TableTd>
        <TableTd>Cereals</TableTd>
        <TableTd>289</TableTd>
        <TableTd>100</TableTd>
        <TableTd><TableRecomSpan Recom={true}/>Yes</TableTd>
        <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
        </TableInfoTd>
    </TableBody>
   </Table>
   }
   {/* <Table>
    <TableMainTitles>
      <TableMainTitle>Title</TableMainTitle>
      <TableMainTitle>Category</TableMainTitle>
      <TableMainTitle>Calories</TableMainTitle>
      <TableMainTitle>Weight</TableMainTitle>
      <TableMainTitle>Recommend</TableMainTitle>
    </TableMainTitles>
    <TableBody>
      <TableTr>
        <MobTitlesTr>
          <TableTh>Title</TableTh>
          <TableTh>Category</TableTh>
          <TableTh>Calories</TableTh>
          <TableTh>Weight</TableTh>
          <TableTh>Recommend</TableTh>
          <TableTh>&nbsp;</TableTh>
        </MobTitlesTr>
        <TableInfoTd>
        <TableTd>Bread Hercules grain</TableTd>
        <TableTd>Cereals</TableTd>
        <TableTd>289</TableTd>
        <TableTd>100</TableTd>
        <TableTd><TableRecomSpan Recom={true}/>Yes</TableTd>
        <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
        </TableInfoTd>
      </TableTr> */}
      {/* <TableTr>
        <MobTitlesTr>
          <TableTh>Title</TableTh>
          <TableTh>Category</TableTh>
          <TableTh>Calories</TableTh>
          <TableTh>Weight</TableTh>
          <TableTh>Recommend</TableTh>
        </MobTitlesTr>
        <TableInfoTd>
        <TableTd>Bread Hercules grain</TableTd>
        <TableTd>Cereals</TableTd>
        <TableTd>289</TableTd>
        <TableTd>100</TableTd>
        <TableTd><TableRecomSpan Recom={true}/>Yes</TableTd>
        <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
        </TableInfoTd>
      </TableTr>
      <TableTr>
        <MobTitlesTr>
          <TableTh>Title</TableTh>
          <TableTh>Category</TableTh>
          <TableTh>Calories</TableTh>
          <TableTh>Weight</TableTh>
          <TableTh>Recommend</TableTh>
        </MobTitlesTr>
        <TableInfoTd>
        <TableTd>Bread Hercules grain</TableTd>
        <TableTd>Cereals</TableTd>
        <TableTd>289</TableTd>
        <TableTd>100</TableTd>
        <TableTd><TableRecomSpan Recom={true}/>Yes</TableTd>
        <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
        </TableInfoTd>
      </TableTr>
    </TableBody>
   </Table> */}
   </TableDiv>
    </>
  )
}