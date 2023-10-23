import ProductsTable from '../ProductsTable/ProductsTable';
import sprite from '../../../assets/images/sprite/sprite.svg';

import {
  DayProdDiv,
  DayProdTitle,
  DayProdUl,
  AddProdBtn,
  AddProdBtnIcon,
  AddProdBtnText
} from './DayProducts.styled'

export default function DayProducts() {
  return (
    <DayProdDiv>
      <DayProdUl>
        <DayProdTitle>Products</DayProdTitle>
        <AddProdBtn to='/Products'><AddProdBtnText>Add product</AddProdBtnText><AddProdBtnIcon><use href={`${sprite}#big_arrow`}></use></AddProdBtnIcon></AddProdBtn>
      </DayProdUl>
      <ProductsTable />
    </DayProdDiv>
  );
}