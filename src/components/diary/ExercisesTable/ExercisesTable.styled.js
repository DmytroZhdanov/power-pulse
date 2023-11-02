import styled from '@emotion/styled';

export const TableDiv = styled.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    max-height: 1000px;
    max-width: 335px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-height: 177px;
    max-width: 704px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
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

export const TableMainTitlesThead = styled.thead`
  text-align: left;
`;

export const TableTitleTr = styled.tr`
  font-size: 12px;
  line-height: ${18 / 12};
  color: ${({ theme }) => theme.color.orangeSecond};
`;

export const TableMainTitleTh = styled.th`
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
      left: 33%;
      width: 22%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:nth-of-type(6) {
      top: 248px;
      left: 60%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: relative;

    &:first-of-type {
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 122px;
    }

    &:nth-of-type(3) {
      width: 118px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 68px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    }

    &:nth-of-type(6) {
      width: 102px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
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
      width: 96px;
    }

    &:nth-of-type(5) {
      width: 76px;
    }

    &:nth-of-type(6) {
      width: 106px;
    }
  }
`;

export const TableBody = styled.tbody``;

export const TableInfoTd = styled.td`
  border-radius: 12px;
  color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.color.grayFirst};

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
      width: 93.6%;
    }

    &:nth-of-type(3) {
      top: 194px;
      width: 93.6%;
    }

    &:nth-of-type(4) {
      top: 274px;
      left: 3%;
      width: 25%;
    }

    &:nth-of-type(5) {
      top: 274px;
      left: 32%;
      width: 22%;
    }

    &:nth-of-type(6) {
      top: 274px;
      left: 58%;
      width: 30%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: relative;
    font-size: 16px;
    line-height: ${24 / 16};
    padding: 7px 14px;

    &:first-of-type {
      max-width: 90px;
    }

    &:nth-of-type(2) {
      max-width: 122px;
    }

    &:nth-of-type(3) {
      max-width: 118px;
    }

    &:nth-of-type(4) {
      max-width: 84px;
    }

    &:nth-of-type(5) {
      max-width: 68px;
    }

    &:nth-of-type(6) {
      max-width: 102px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
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
`;

export const DelBtnTableButton = styled.button`
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: 4px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-left: 12px;
  }
`;

export const DelIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.color.orangeSecond};
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: white;
    fill: white;
  }
`;
