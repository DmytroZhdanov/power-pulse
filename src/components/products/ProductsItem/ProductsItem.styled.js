import styled from '@emotion/styled';

export const ProductCardDiv = styled.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayDisabled};
  margin-bottom: 20px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 335px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 405px;
  }
`;

export const ProductHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`;

export const DietP = styled.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.grayFourth};
  color: ${({ theme }) => theme.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`;

export const RecommendDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const IndicatorDiv = styled.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${({ recommended, theme }) =>
    recommended ? theme.color.circleGreen : theme.color.circleRed};
`;

export const RecommendTextP = styled.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const BtnTextP = styled.p`
  margin-right: 8px;
  color: ${({ theme }) => theme.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`;

export const SvgAdd = styled.svg`
  width: 16px;
  height: 16px;
`;

export const ProductDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const SvgProd = styled.svg`
  width: 24px;
  height: 24px;
`;

export const ProductTitleH2 = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const TextP = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: capitalize;

  ${props =>
    props.category && {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
`;

export const ValueSpan = styled.span`
  color: ${({ theme }) => theme.color.white};
  padding-left: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: 4px;
  }
`;
