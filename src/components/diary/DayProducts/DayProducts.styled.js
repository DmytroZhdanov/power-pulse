import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DayProdDiv = styled.div`
@media screen and (max-width: 767px) {
    max-height:824px;
    padding: 16px ;
  }
  @media screen and (min-width: 768px) {
    padding: 16px ;
    max-height:234px
  }
border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
`

export const DayProdTitle = styled.h2`
color: rgba(239, 237, 232, 0.5);
font-size: 14px;
line-height: ${18 / 14};
`
export const DayProdUl = styled.ul`
@media screen and (max-width: 767px) {
    margin-bottom: 22px;
}

@media screen and (min-width: 768px)  {
      margin-bottom: 16px;
  }
display:flex;
justify-content: space-between;
align-items: center;
`
export const AddProdBtn = styled(Link)`
display:flex;
align-items: center;
gap: 8px
`
export const AddProdBtnText = styled.p`
@media screen and (max-width: 767px) {
    font-size: 14px;
line-height: ${18 / 14};
}

@media screen and (min-width: 768px)  {
      font-size: 16px;
      line-height: ${24 / 16};
  }
color:#E6533C;
font-weight: 500;
`
export const AddProdBtnIcon = styled.svg`
width:16px;
height: 16px;`