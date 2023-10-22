import styled from '@emotion/styled';

export const Form = styled.form`
  width: 339px;
  padding: 0 2px;
  background-color: #0a0909;

  button {
    width: 115px;
    padding: 12px 40px;
    font-size: 16px;
    line-height: calc(18 / 16);
    color: #efede899;
    border-radius: 12px;
    background-color: #e6533c;
    border: none;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 15px;
    button {
      width: 144px;
      padding: 16px 50px;
      font-size: 20px;
      line-height: calc(24 / 20);
    }
  }
`;

export const BasInfo = styled.div`
  margin-bottom: 20px;
  label {
    position: relative;
    font-size: 12px;
    line-height: calc(18 / 12);
    color: #efede880;
  }

  input {
    padding: 13px;
    width: 100%;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
    border: 1px solid #efede84d;
    border-radius: 12px;
    background-color: transparent;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 10px;
    line-height: calc(12 / 10);
    color: #e6533c;
  }

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    right: 15px;
    stroke: #e61010;
    rotate: 50deg;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    label {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    input {
      width: 340px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    p {
      font-size: 12px;
    }
  }
`;

export const FirstInfo = styled.div`
  width: 100%;
  margin-bottom: 14px;

  div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 4px;
  }

  @media screen and (min-width: 768px) {
    div {
      flex-direction: row;
      margin-top: 8px;
    }
  }
`;

export const AddInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  div {
    display: inline-flex;
    gap: 14px;
  }

  label {
    width: 160px;
  }
  input {
    width: 100%;
    margin-top: 4px;
  }

  p {
    margin-top: 3px;
  }

  @media screen and (min-width: 768px) {
    div {
      width: 340px;
      justify-content: space-between;
    }
    input {
      margin-top: 8px;
    }
  }
`;
export const Text = styled.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
export const SecondInfo = styled.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
  }
`;

export const RadioBtn = styled.input`
  margin: 0;
  width: 18px;
  height: 18px;

  &::before {
    content: '';
    display: flex;
    align-items: center;
    margin: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #636366;
    background-color: black;
  }

  &:checked&::before {
    max-width: 10px;
    height: 10px;
    border: thick double #0e0e0d;
    background-color: #ef8964;
  }
`;
export const HealthInfo = styled.div`
  label {
    margin-right: 8px;

    &:last-of-type {
      margin-right: 0px;
    }

    &:nth-of-type(4) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    label {
      &:nth-of-type(4) {
        margin-right: 32px;
      }
    }
  }
`;

export const Lifestyle = styled.div`
  margin: 40px 0;

  label {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 768px) {
    margin: 32px 0 38px 0;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 48px;
  }
`;
