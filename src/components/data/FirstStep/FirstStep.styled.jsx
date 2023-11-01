import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 14px;
  margin-top: 50px;
  margin-bottom: 29px;

  @media screen and (min-width: 768px) {
    column-gap: 14px;
  }

  @media screen and (min-width: 768px) {
    max-width: 528px;
    justify-content: flex-start;
    gap: 14px;
    margin-top: 54px;
    margin-bottom: 32px;
  }
`;

export const Item = styled.li`
  flex-basis: calc((100% - 10px) / 2);

  @media screen and (min-width: 768px) {
    flex-basis: 31%;
  }
`;
