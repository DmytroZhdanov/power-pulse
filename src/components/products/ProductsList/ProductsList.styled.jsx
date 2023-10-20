import styled from '@emotion/styled';

export const Container = styled.div`
  @media (min-width: 320px) {
    color: #efede8;
    ${'' /*Временный фон*/}
    background: rgba(4, 4, 4, 1);
    ${'' /*КОНЕЦ*/}
    ${'' /*background: rgba(239, 237, 232, 0.05);*/}
    margin: 0 auto;
    padding: 20px;
    width: 375px;
    display: flex;
    justify-content: center; /* Выравнивание по горизонтали по центру */
  }

  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 726px;
    height: 660px;

    overflow-y: scroll;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export const ProductList = styled.ul`
  @media (min-width: 320px) {
  }

  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }
  @media (min-width: 1440px) {
    width: 850px;
    height: 487px;
    margin-right: auto;
  }
`;
