import styled from '@emotion/styled';

export const Section = styled.div`
  justify-content: center;
`;

export const ProductCard = styled.li`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`;

export const Diet = styled.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  color: '#fff';
  font-size: 12px;
  font-weight: 700;
`;

export const RecommendDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Indicator = styled.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${props => (props.recommended ? '#419B09' : '#E9101D')};
`;

export const RecommendText = styled.p`
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

export const BtnText = styled.p`
  margin-right: 8px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const ProductTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 16px;
`;

export const Text = styled.p`
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

export const Value = styled.span`
  color: #efede8;
  padding-left: 8px;

  @media (min-width: 768px) {
    padding-left: 4px;
  }
`;
