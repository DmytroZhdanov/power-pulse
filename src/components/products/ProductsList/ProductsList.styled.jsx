import styled from '@emotion/styled';

export const ProductList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
    height: 660px;
    /*width: 704px;*/
    overflow-y: scroll;
  }
  @media (min-width: 1440px) {
    width: 850px;
    height: 487px;
    /*height: ${window.innerHeight - 313}px;*/
  }
`;
