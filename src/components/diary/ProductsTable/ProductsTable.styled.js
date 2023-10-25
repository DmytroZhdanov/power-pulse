import styled from '@emotion/styled';

export const TableDiv = styled.div`
@media screen and (max-width: 767px) {
    max-height: 754px;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-height: 162px;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 826px;
  }
  scroll-behavior:auto;
  overflow-y:auto;
  overflow-x: hidden;
`
export const Table = styled.table`
  @media screen and (min-width: 768px) {
    border-spacing: 4px;
    border-collapse: collapse;
    // margin: -4px;
  }
`
export const TableTr = styled.tr`
@media screen and (max-width: 767px) {
    position: relative;
    height: 264px;
    width:100%;
    &:last-child {
        height: 224px;
    }  
}

@media screen and (min-width: 768px) {
    height: 40px;
  }
`
export const MobTitlesTr = styled.td`
@media screen and (min-width: 768px) {
    display:none
  }`

export const TableTh = styled.p`
color: #EF8964;
text-align: left;
font-size: 12px;
line-height: ${18 / 12};
position: absolute;
&:nth-child(2) {
    top:80px
}
&:nth-child(3) {
    top:160px
}
&:nth-child(4) {
    top:160px;
    left:97px
}
&:nth-child(5) {
    top:160px;
    left:197px
}
`
export const TableInfoTd = styled.td`
display: flex;
gap: 8px;
margin-bottom: 8px;
`

export const TableTd = styled.p`
  border-radius: 12px;
  color: #EFEDE8;
  border: 1px solid rgba(239, 237, 232, 0.3);
  @media screen and (max-width: 767px) {
    position:absolute;
    padding: 10px 14px;
    font-size: 14px;
    line-height: ${18 / 14};
    &:first-child {
      top:26px;
      width: 297px;
  }
  &:nth-child(2) {
      top:106px;
      width: 297px;
     
  }
  &:nth-child(3) {
      top:186px;
      width: 81px;
  }
  &:nth-child(4) {
      top:186px;
      left:97px;
      width: 80px;
  }
  &:nth-child(5) {
      top:186px;
      left:193px;
      width: 76px;
  }
  }
  
  @media screen and (min-width: 768px) {
    position: relative;
    font-size: 16px;
    line-height: ${24 / 16};
    padding: 8px 14px;
    &:first-child {
        width: 204px;
    }
    &:nth-child(2) {
        width: 128px;
        
    }
    &:nth-child(3) {
        width: 90px;
    }
    &:nth-child(4) {
        width: 90px;
    }
    &:nth-child(5) {
        width: 80px;
    } 
}
@media screen and (min-width: 1440px) {
    &:first-child {
        width: 212px;
    }
    &:nth-child(2) {
        width: 166px;
        
    }
    &:nth-child(3) {
        width: 105px;
    }
    &:nth-child(4) {
        width: 105px;
    }
    &:nth-child(5) {
        width: 110px;
    }
  }

`
export const DelBtnTable = styled.button`
width:20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (max-width: 767px) {
      position: absolute;
      top:195px;
      left:277px
  }
  
  @media screen and (min-width: 768px) {
      position: relative;
  }
`
export const DelIcon = styled.svg`
width:20px;
height: 20px;
`
export const TableRecomSpan = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${props => props.Recom ? 'background-color: #419B09' : 'background-color: #E9101D'}
`
export const TableMainTitle = styled.th`
font-size: 12px;
line-height: ${18 / 12};
color: #EF8964;
@media screen and (min-width: 768px) {
    &:first-child {
        width: 204px;
    }
    &:nth-child(2) {
        width: 128px;
        
    }
    &:nth-child(3) {
        width: 90px;
    }
    &:nth-child(4) {
        width: 90px;
    }
    &:nth-child(5) {
        width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-child {
        width: 212px;
    }
    &:nth-child(2) {
        width: 166px;
        
    }
    &:nth-child(3) {
        width: 105px;
    }
    &:nth-child(4) {
        width: 105px;
    }
    &:nth-child(5) {
        width: 110px;
    }
  }

`
export const TableMainTitles = styled.thead`
@media screen and (max-width: 767px) {
    // display:none
}
@media screen and (min-width: 768px) {
    display: inline-table;
    text-align: left;
}
`
export const TableBody = styled.tbody`
border-spacing:  4px ;
`