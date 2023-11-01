import styled from '@emotion/styled';

export const ListUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 14px;
  margin-top: 50px;
  margin-bottom: 29px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 528px;
    justify-content: flex-start;
    gap: 14px;
    margin-top: 54px;
    margin-bottom: 32px;
  }
`;

export const ItemLi = styled.li`
  flex-basis: calc((100% - 10px) / 2);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-basis: 31%;
  }
`;
