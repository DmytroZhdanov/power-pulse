import styled from '@emotion/styled';

export const TableDiv = styled.div`
@media screen and (max-width: 767px) {
    max-height: 790px;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-height: 178px;
    max-width: 656px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 826px;
  }
`
export const TableUl = styled.ul`
// padding: 0 22px 0 16px;
`
export const TableLi = styled.li`
@media screen and (max-width: 767px) {
    height: 224px;
    width:297px;
    margin-bottom: 40px;
}
@media screen and (min-width: 768px) {
    height: 40px;
    width:656px;
    margin-bottom: 8px;
}
@media screen and (min-width: 1440px) {
    width: 762px;
  }
position: relative;
&:last-child{
    margin-bottom: 0;
}
`
export const TableMobTitlesP = styled.p`
  @media screen and (min-width: 768px) {
    display:none
  }

`
export const TableMobTitleP = styled.p`
color: #EF8964;
font-size: 12px;
line-height: ${18 / 12};
position: absolute;
&:first-child {
   
}
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
&:nth-child(6) {
    top:160px
}
`
export const TableProd = styled.p`
@media screen and (min-width: 768px) {
    display:flex;
    gap:8px
  }
`
export const TableProdInf = styled.p`
@media screen and (max-width: 767px) {
    position: absolute;
    font-size: 14px;
    line-height: ${18 / 14};
    color:#EFEDE8;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 10px 14px;
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
        left:197px;
        width: 76px;
    }
    &:nth-child(6) {
        top:160px
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
    // &:nth-child(6) {
    //     top:160px
    // }   
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
    // &:nth-child(6) {
    //     top:160px
    // }   
  }
color:#EFEDE8;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.3);

`
export const TableRecomSpan = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  ${props => props.Recom ? 'background-color: #419B09' : 'background-color: #E9101D'}
`
export const TableMaintitles = styled.li`
@media screen and (max-width: 767px) {
    display:none
  }

  @media screen and (min-width: 768px) {
    display:flex;
    font-size: 12px;
    line-height: ${18 / 12};
    color: #EF8964;
    gap:8px;
    margin-bottom: 8px;
  }
`
export const TableMaintitle = styled.p`
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