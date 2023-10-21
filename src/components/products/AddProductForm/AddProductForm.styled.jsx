import styled from '@emotion/styled';

export const AddProductModal = styled.div``;

export const InputName = styled.input`
  @media screen and (min-width: 320px) {
    width: 287px;
    text-align: left;
    padding: 8px 14px 8px 14px;
    border-radius: 12px;
    margin-bottom: 16px;

    border: 1px solid #e6533c;
    background: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    line-height: calc(18 / 14);
    color: rgba(239, 237, 232, 0.3);
  }

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const DivGrams = styled.div`
  @media screen and (min-width: 320px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const InputGrams = styled.input`
  @media screen and (min-width: 320px) {
    width: 287px;
    &::-webkit-inner-spin-button {
      appearance: none;
    }

    text-align: left;
    padding: 8px 14px 8px 14px;
    border-radius: 12px;
    border: 1px solid #e6533c;
    background: rgba(0, 0, 0, 0.5);
    color: #efede8;
    font-size: 14px;
    line-height: calc(18 / 14);
  }

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const Placeholder = styled.span`
  position: relative;
  right: 50px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const DivCalories = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;

    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;
export const Calories = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`;

export const ValueCalories = styled.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`;
export const DivBtn = styled.div``;

export const ButtonAdd = styled.button`
  @media screen and (min-width: 320px) {
    width: 151px;
    padding: 12px 32px;
    border: none;
    color: #efede8;
    margin-right: 14px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 12px;
    background: #e6533c;
    line-height: calc(18 / 16);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    margin-right: 16px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ButtonCancel = styled.button`
  @media screen and (min-width: 320px) {
    width: 121px;
    height: 42px;
    padding: 12px 36px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background: rgba(0, 0, 0, 0.5);
    color: #efede8;
    font-size: 16px;
    font-weight: 500;
    line-height: calc(18 / 16);
  }
  @media screen and (min-width: 768px) {
    width: 142px;
    padding: 14px 40px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;
