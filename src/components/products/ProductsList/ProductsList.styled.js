import styled from '@emotion/styled';

export const ProductListUl = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 660px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;

    overflow-y: scroll;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 850px;
    height: 487px;
  }
`;

export const DefaultTextP = styled.p`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const SpanNotFound = styled.span`
  color: #e6533c;
`;

export const SpanTry = styled.span`
  margin-top: 16px;
  color: ${({ theme }) => theme.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
