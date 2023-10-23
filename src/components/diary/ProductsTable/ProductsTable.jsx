import {
  TableDiv,
  TableUl,
  TableLi,
  TableMobTitlesP,
  TableMobTitleP,
  TableProd,
  TableProdInf,
  TableRecomSpan,
  TableMaintitles,
  TableMaintitle,
  DelBtnTable,
  DelIcon
} from './ProductsTable.styled'
import sprite from '../../../assets/images/sprite/sprite.svg';
export default function ProductsTable() {
  return (
    <TableDiv>
      <TableUl>
        <TableMaintitles>
          <TableMaintitle>Title</TableMaintitle>
          <TableMaintitle>Category</TableMaintitle>
          <TableMaintitle>Calories</TableMaintitle>
          <TableMaintitle>Weight</TableMaintitle>
          <TableMaintitle>Recommend</TableMaintitle>
        </TableMaintitles>
        <TableLi>
          <TableMobTitlesP>
            <TableMobTitleP>Title</TableMobTitleP>
            <TableMobTitleP>Category</TableMobTitleP>
            <TableMobTitleP>Calories</TableMobTitleP>
            <TableMobTitleP>Weight</TableMobTitleP>
            <TableMobTitleP>Recommend</TableMobTitleP>
          </TableMobTitlesP>
          <TableProd>
            <TableProdInf>Bread Hercules grain</TableProdInf>
            <TableProdInf>Flour</TableProdInf>
            <TableProdInf>289</TableProdInf>
            <TableProdInf>100</TableProdInf>
            <TableProdInf><TableRecomSpan Recom={true}/>Yes</TableProdInf>
            <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
          </TableProd>
        </TableLi>
        <TableLi>
          <TableMobTitlesP>
            <TableMobTitleP>Title</TableMobTitleP>
            <TableMobTitleP>Category</TableMobTitleP>
            <TableMobTitleP>Calories</TableMobTitleP>
            <TableMobTitleP>Weight</TableMobTitleP>
            <TableMobTitleP>Recommend</TableMobTitleP>
          </TableMobTitlesP>
          <TableProd>
            <TableProdInf>Bread Hercules grain</TableProdInf>
            <TableProdInf>Flour</TableProdInf>
            <TableProdInf>289</TableProdInf>
            <TableProdInf>100</TableProdInf>
            <TableProdInf><TableRecomSpan Recom={true}/>Yes</TableProdInf>
            <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
          </TableProd>
        </TableLi>
        <TableLi>
          <TableMobTitlesP>
            <TableMobTitleP>Title</TableMobTitleP>
            <TableMobTitleP>Category</TableMobTitleP>
            <TableMobTitleP>Calories</TableMobTitleP>
            <TableMobTitleP>Weight</TableMobTitleP>
            <TableMobTitleP>Recommend</TableMobTitleP>
          </TableMobTitlesP>
          <TableProd>
            <TableProdInf>Bread Hercules grain</TableProdInf>
            <TableProdInf>Flour</TableProdInf>
            <TableProdInf>289</TableProdInf>
            <TableProdInf>100</TableProdInf>
            <TableProdInf><TableRecomSpan Recom={true}/>Yes</TableProdInf>
            <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
          </TableProd>
        </TableLi>
        {/* <TableLi>
          <TableMobTitlesP>
            <TableMobTitleP>Title</TableMobTitleP>
            <TableMobTitleP>Category</TableMobTitleP>
            <TableMobTitleP>Calories</TableMobTitleP>
            <TableMobTitleP>Weight</TableMobTitleP>
            <TableMobTitleP>Recommend</TableMobTitleP>
          </TableMobTitlesP>
          <TableProd>
            <TableProdInf>Bread Hercules grain</TableProdInf>
            <TableProdInf>Flour</TableProdInf>
            <TableProdInf>289</TableProdInf>
            <TableProdInf>100</TableProdInf>
            <TableProdInf><TableRecomSpan Recom={true}/>Yes</TableProdInf>
            <DelBtnTable><DelIcon> <use href={`${sprite}#delete`}></use></DelIcon></DelBtnTable>
          </TableProd>
        </TableLi> */}
      </TableUl>
    </TableDiv>
  )
}
