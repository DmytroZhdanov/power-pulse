import ProductsTable from '../ProductsTable/ProductsTable';

import {
  DayProdDiv,
  DayProdTitle,
  DayProdUl,
  AddProdBtn
} from './DayProducts.styled'

export default function DayProducts() {
  return (
    <DayProdDiv>
      <DayProdUl>
        <DayProdTitle>Products</DayProdTitle>
        <AddProdBtn>Add product</AddProdBtn>
      </DayProdUl>
      <ProductsTable />
    </DayProdDiv>
  );
}