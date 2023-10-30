import ProductsTable from '../ProductsTable/ProductsTable';

import sprite from '../../../assets/images/sprite/sprite.svg';

import {
  DayProdDiv,
  DayProdText,
  DayProdTitle,
  DayProdDivList,
  AddProdBtn,
  AddProdBtnIcon,
  AddProdBtnText,
} from './DayProducts.styled';

export default function DayProducts({ data, fetchDiaryProducts, blood }) {
  return (
    <DayProdDiv>
      <DayProdDivList>
        <DayProdTitle>Products</DayProdTitle>
        <AddProdBtn to="/Products">
          <AddProdBtnText>Add product</AddProdBtnText>
          <AddProdBtnIcon>
            <use href={`${sprite}#big_arrow`}></use>
          </AddProdBtnIcon>
        </AddProdBtn>
      </DayProdDivList>
      {data && data.length !== 0 ? (
        <ProductsTable
          blood={blood}
          fetchDiaryProducts={fetchDiaryProducts}
          data={data}
        />
      ) : (
        <DayProdText>Not found products</DayProdText>
      )}
    </DayProdDiv>
  );
}
