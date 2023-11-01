import styled from '@emotion/styled';

export const TableDiv = styled.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and (max-width: 767px) {
    max-height: 1000px;
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-height: 177px;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 804px;
    padding: 0 8px;
  }
`;

export const Table = styled.table`
  border-spacing: 8px;
  border-collapse: separate;
  @media screen and (max-width: 767px) {
    position: relative;
    height: 342px;
    width: 100%;
    &:last-child {
      height: 314px;
    }
  }
`;

export const TableMainTitles = styled.thead`
  text-align: left;
`;

export const TableTitleTr = styled.tr`
  font-size: 12px;
  line-height: ${18 / 12};
  color: #ef8964;
`;

export const TableMainTitle = styled.th`
@media screen and (max-width: 767px) {
  position: absolute; 
  &:nth-of-type(2) {
    top: 88px;
  }
  &:nth-of-type(3) {
    top: 168px;
  }
  &:nth-of-type(4) {
    top: 248px;
    left: 3%;
  }
  &:nth-of-type(5) {
    top: 248px;
    left: 34%;
    width: 24%;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:nth-of-type(6) {
    top: 248px;
    left: 63%;
  }
}

@media screen and (min-width: 768px) {
  position:relative;
  &:first-of-type {
    width: 90px;
  }
  &:nth-of-type(2) {
    width: 132px;
  }
  &:nth-of-type(3) {
    width: 128px;
  }
  &:nth-of-type(4) {
    width: 84px;
  }
  &:nth-of-type(5) {
    width: 78px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  &:nth-of-type(6) {
    width: 72px;
  }
}

@media screen and (min-width: 1440px) {
  &:first-of-type {
    width: 115px;
  }
  &:nth-of-type(2) {
    width: 157px;
  }
  &:nth-of-type(3) {
    width: 131px;
  }
  &:nth-of-type(4) {
    width: 106px;
  }
  &:nth-of-type(5) {
    width: 91px;
  }
  &:nth-of-type(6) {
    width: 82px;
  }
}  
`;

export const TableBody = styled.tbody``;

export const TableTr = styled.tr``;

export const TableInfoTd = styled.td`
  border-radius: 12px;
  color: #efede8;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgba(239, 237, 232, 0.3);
  &::first-letter {
    text-transform: uppercase;
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    padding: 10px 14px;
    font-size: 14px;
    line-height: ${18 / 14};
    &:first-of-type {
      top: 34px;
      width: 93.6%;
    }
    &:nth-of-type(2) {
      top: 114px;
      width: 93.6%;;
    }
    &:nth-of-type(3) {
      top: 194px;
      width:93.6%;;
    }
    &:nth-of-type(4) {
      top: 274px;
      left: 3%;
      width: 25.5%;;
    }
    &:nth-of-type(5) {
      top: 274px;
      left: 34%;
      width: 24%;
    }
    &:nth-of-type(6) {
      top: 274px;
      left: 63%;
      width: 25%;
    }
  }
  @media screen and (min-width: 768px) {
    position: relative;
    font-size: 16px;
    line-height: ${24 / 16};
    padding: 7px 14px;
    &:first-of-type {
      max-width: 90px;
    }
    &:nth-of-type(2) {
     max-width: 132px;
    }
    &:nth-of-type(3) {
      max-width: 128px;
    }
    &:nth-of-type(4) {
      max-width: 84px;
    }
    &:nth-of-type(5) {
     max-width: 78px;
    }
    &:nth-of-type(6) {
      max-width: 72px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:first-of-type {
      max-width: 115px;
    }
    &:nth-of-type(2) {
      max-width: 157px;
    }
    &:nth-of-type(3) {
      max-width: 131px;
    }
    &:nth-of-type(4) {
     max-width: 106px;
    }
    &:nth-of-type(5) {
      max-width: 91px;
    }
    &:nth-of-type(6) {
      max-width: 82px;
    }
  }
} 
`;

export const BtnTd = styled.td``

export const DelBtnTable = styled.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 283px;
    left: 91%;
  }
  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 12px;
  }
  `;
export const DelIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
  stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
  fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  &:is(:hover, :focus) {
    stroke: white;
    fill: white;
  }
`;

