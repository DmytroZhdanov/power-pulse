import ProductsTable from '../ProductsTable/ProductsTable';

import sprite from '../../../assets/images/sprite/sprite.svg';

import {
  DayProdDiv,
  DayProdTitle,
<<<<<<< HEAD
  DayProdUl,
=======
  DayProdDivList,
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  AddProdBtn,
  AddProdBtnIcon,
  AddProdBtnText
} from './DayProducts.styled'

export default function DayProducts() {
  return (
    <DayProdDiv>
<<<<<<< HEAD
      <DayProdUl>
        <DayProdTitle>Products</DayProdTitle>
        <AddProdBtn to='/Products'><AddProdBtnText>Add product</AddProdBtnText><AddProdBtnIcon><use href={`${sprite}#big_arrow`}></use></AddProdBtnIcon></AddProdBtn>
      </DayProdUl>
=======
      <DayProdDivList>
        <DayProdTitle>Products</DayProdTitle>
        <AddProdBtn to='/Products'><AddProdBtnText>Add product</AddProdBtnText><AddProdBtnIcon><use href={`${sprite}#big_arrow`}></use></AddProdBtnIcon></AddProdBtn>
      </DayProdDivList>
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
      <ProductsTable />
    </DayProdDiv>
  );
}
