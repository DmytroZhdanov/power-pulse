import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 593px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 390px;
  }
`;

export const BlockListUl = styled.ul`
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 48px;
  }
`;

export const BlockItemLi = styled.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${({ highlighted, theme }) =>
    highlighted ? theme.color.orangeFirst : theme.color.grayFourth};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayDisabled};
  ${({ caloriesOverConsumed, theme }) =>
    caloriesOverConsumed && `border-color: ${theme.color.circleRed}`};
  ${({ caloriesOverBurned, theme }) =>
    caloriesOverBurned && `border-color: ${theme.color.inputSuccess}`};

  @media screen and (max-width: 374px) {
    margin: 0 auto;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 187px;
    padding: 18px;
  }
`;

export const TitleWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.color.orangeSecond};
`;

export const TitleH2 = styled.h2`
  font-size: 12px;
  line-height: ${16 / 12};
  color: ${({ highlighted, theme }) =>
    highlighted ? 'rgba(239, 237, 232, 0.8)' : theme.color.grayThird};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    text-wrap: nowrap;
    line-height: ${18 / 12};
  }
`;

export const ValueP = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: ${20 / 18};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
    line-height: ${32 / 24};
  }
`;

export const TextWrapperDiv = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`;

export const IconWrapperDiv = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.orangeThird};
  border-radius: 50%;
`;

export const ExclamationIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const TextP = styled.p`
  font-size: 14px;
  line-height: ${18 / 14};
  color: ${({ theme }) => theme.color.grayFirst};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: ${24 / 16};
  }
`;
