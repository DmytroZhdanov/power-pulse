import styled from '@emotion/styled';

export const DayProdDiv = styled.div`
@media screen and (max-width: 767px) {
    max-height:100%;
    padding: 16px ;
  }
  @media screen and (min-width: 768px) {
    padding: 16px ;
    max-height:234px
  }
  @media screen and (min-width: 1440px) {
    padding: 16px 32px;
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
`
export const AddProdBtn = styled.li`
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