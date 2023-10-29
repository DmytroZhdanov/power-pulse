import styled from '@emotion/styled';

<<<<<<< HEAD
=======
export const DivProducts = styled.div`
  @media (min-width: 768px) {
    height: 660px;
  }
  @media (min-width: 1440px) {
    height: 487px;
  }
`;

>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
export const ProductList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
<<<<<<< HEAD
    height: 660px;
=======

>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    overflow-y: scroll;
  }
  @media (min-width: 1440px) {
    width: 850px;
<<<<<<< HEAD
    /* height: 487px; */
    height: ${window.innerHeight - 313}px;
=======
  }
`;

export const DefaultText = styled.p`
  margin-bottom: 16px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const SpanNotFound = styled.span`
  color: #e6533c;
`;

export const SpanTry = styled.span`
  margin-top: 16px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  }
`;
