import styled from '@emotion/styled';

export const ProductCard = styled.li`
  @media (min-width: 320px) {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
    max-width: 335px;
    height: 141px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
  }

  @media (min-width: 375px) {
    max-width: 335px;
  }
  @media (min-width: 768px) {
    margin: 16px 8px;
    width: calc((100% - 24px) / 2);
  }
  @media (min-width: 1440px) {
    max-width: 405px;
  }
`;

export const ProductHeader = styled.div`
  @media (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 27px;
  }
`;
export const Diet = styled.p`
  @media (min-width: 320px) {
    padding: 5px 7.5px;
    border-radius: 4px;
    background: rgba(239, 237, 232, 0.05);

    color: var(--white-white, #fff);
    font-family: Roboto, sans-serif;
    font-size: 12px;

    font-weight: 700;
  }
`;
export const RecommendDiv = styled.div`
  @media (min-width: 320px) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Indicator = styled.div`
  @media (min-width: 320px) {
    margin-right: 8px;
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${props => (props.recommended ? '#419B09' : '#E9101D')};
  }
`;
export const RecommendText = styled.p`
  @media (min-width: 320px) {
    margin-right: 16px;
    color: #efede8;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const Button = styled.button`
  @media (min-width: 320px) {
    display: inline-flex;
    background: rgba(0, 0, 0, 0);
    border: 1px solid #000;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const BtnText = styled.p`
  @media (min-width: 320px) {
    margin-right: 8px;
    color: #e6533c;

    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const Product = styled.div`
  @media (min-width: 320px) {
    display: flex;

    align-items: center;
    margin-bottom: 8px;
  }
`;

export const Svg = styled.svg`
  @media (min-width: 320px) {
    margin-right: 16px;
  }
`;

export const ProductTitle = styled.h2`
  @media (min-width: 320px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #efede8;
    font-family: Roboto, sans-serif;
    font-size: 20px;

    font-weight: 400;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Description = styled.div`
  @media (min-width: 320px) {
    display: flex;
  }
`;
export const Text = styled.p`
  @media (min-width: 320px) {
    margin-right: 16px;
    color: rgba(239, 237, 232, 0.4);
    font-family: Roboto, sans-serif;
    font-size: 12px;

    font-weight: 400;
    line-height: 18px;
  }
`;

export const Value = styled.span`
  @media (min-width: 320px) {
    margin-left: 8px;
    color: #efede8;
    font-family: Roboto, sans-serif;
    font-size: 12px;

    font-weight: 400;
    line-height: 18px;
  }

  @media (min-width: 768px) {
    margin-left: 4px;
  }
`;
