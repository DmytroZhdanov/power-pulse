import styled from '@emotion/styled';

export const DivAddForm = styled.div`
  padding: 48px 24px;

  width: 280px;

  @media screen and (min-width: 375px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
    width: auto;
  }
`;

export const DivInputs = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 415px;
  }
`;

export const InputName = styled.input`
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid #e6533c;
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const DivGrams = styled.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const InputGrams = styled.input`
  width: 100%;
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

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    right: 16px;
    top: 12px;
  }
`;

export const DivCalories = styled.div`
  display: flex;
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
export const DivBtn = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const WrapperDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const ButtonAdd = styled.button`
  padding: 12px 22px;
  border: none;
  color: #efede8;

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: #e6533c;
  line-height: calc(18 / 16);

  @media screen and (min-width: 375px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ButtonCancel = styled.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: transparent;
  color: #efede8;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);
  @media screen and (min-width: 375px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
