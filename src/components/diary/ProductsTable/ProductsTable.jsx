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
  TableMaintitle
} from './ProductsTable.styled'

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
          {/* <TableMaintitle></TableMaintitle> */}
        </TableMaintitles>
        <TableLi>
          <TableMobTitlesP>
            <TableMobTitleP>Title</TableMobTitleP>
            <TableMobTitleP>Category</TableMobTitleP>
            <TableMobTitleP>Calories</TableMobTitleP>
            <TableMobTitleP>Weight</TableMobTitleP>
            <TableMobTitleP>Recommend</TableMobTitleP>
            {/* <TableMobTitleP>&nbsp;</TableMobTitleP> */}
          </TableMobTitlesP>
          <TableProd>
            <TableProdInf>Bread Hercules grain</TableProdInf>
            <TableProdInf>Flour</TableProdInf>
            <TableProdInf>289</TableProdInf>
            <TableProdInf>100</TableProdInf>
            <TableProdInf><TableRecomSpan Recom={true}/>Yes</TableProdInf>
            {/* <TableProdInf>&nbsp;</TableProdInf> */}
          </TableProd>
        </TableLi>
        <TableLi>
          <TableMobTitlesP>
            <TableMobTitleP>Title</TableMobTitleP>
            <TableMobTitleP>Category</TableMobTitleP>
            <TableMobTitleP>Calories</TableMobTitleP>
            <TableMobTitleP>Weight</TableMobTitleP>
            <TableMobTitleP>Recommend</TableMobTitleP>
            {/* <TableMobTitleP>&nbsp;</TableMobTitleP> */}
          </TableMobTitlesP>
          <TableProd>
            <TableProdInf>Bread Hercules grain</TableProdInf>
            <TableProdInf>Flour</TableProdInf>
            <TableProdInf>289</TableProdInf>
            <TableProdInf>100</TableProdInf>
            <TableProdInf><TableRecomSpan Recom={true}/>Yes</TableProdInf>
            {/* <TableProdInf>&nbsp;</TableProdInf> */}
          </TableProd>
        </TableLi>
        {/* <TableLi>
          <TableMobTitlesP>
            <TableMobTitleP>Title</TableMobTitleP>
            <TableMobTitleP>Category</TableMobTitleP>
            <TableMobTitleP>Calories</TableMobTitleP>
            <TableMobTitleP>Weight</TableMobTitleP>
            <TableMobTitleP>Recommend</TableMobTitleP>
            <TableMobTitleP>&nbsp;</TableMobTitleP>
          </TableMobTitlesP>
          <TableProd>
            <TableProdInf>Bread Hercules grain</TableProdInf>
            <TableProdInf>Flour</TableProdInf>
            <TableProdInf>289</TableProdInf>
            <TableProdInf>100</TableProdInf>
            <TableProdInf><TableRecomSpan Recom={true}/>Yes</TableProdInf>
            <TableProdInf>&nbsp;</TableProdInf>

          </TableProd>
        </TableLi> */}
      </TableUl>
    </TableDiv>
  )
}
