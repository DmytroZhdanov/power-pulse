import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DayExerDiv = styled.div`
@media screen and (max-width: 767px) {
    max-height:1164px;
    padding: 16px ;
    padding-left: 8px ;
  }
  @media screen and (min-width: 768px) {
    padding: 16px ;
    padding-bottom:8px;
    max-height:234px
  }
  @media screen and (min-width: 1440px) {
    padding: 16px ;
  }
border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
`

export const DayExerTitle = styled.h2`
color: rgba(239, 237, 232, 0.5);
font-size: 14px;
line-height: ${18 / 14};
`
export const DayExerUl = styled.ul`
@media screen and (max-width: 767px) {
    margin-bottom: 14px;
    padding-left: 8px ;
}

@media screen and (min-width: 768px)  {
      margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 ;
  }
display:flex;
justify-content: space-between;
align-items: center;
`
export const AddExerBtn = styled(Link)`
display:flex;
align-items: center;
gap: 8px
`
export const AddExerBtnText = styled.p`
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
export const AddExerBtnIcon = styled.svg`
width:16px;
height: 16px;`