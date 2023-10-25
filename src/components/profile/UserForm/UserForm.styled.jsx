import styled from '@emotion/styled';
import styles from 'react-day-picker/dist/style.css';

export const Form = styled.form`
  width: 335px;
  background-color: #0a0909;
  /* 
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 10px;
    line-height: calc(12 / 10);
    color: #e6533c;
  } */

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

  @media (min-width: 768px) {
    width: 696px;

    button {
      width: 144px;
      padding: 16px 50px;
      font-size: 20px;
      line-height: calc(24 / 20);
    }
  }

  @media screen and (min-width: 1440px) {
    width: 760px;
    padding-right: 64px;
    border-right: 1px solid #efede833;
  }
`;

export const FirstInfo = styled.div`
  width: 100%;
  margin-bottom: 14px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: #efede880;
    input {
      margin: 4px 0 14px 0;
    }
  }

  input {
    padding: 14px;

    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
    border: 1px solid #efede84d;
    border-radius: 12px;
    background-color: transparent;
    width: 335px;
  }

  @media (min-width: 768px) {
    display: inline-flex;
    align-items: flex-end;
    gap: 14px;
    label {
      width: 341px;
      display: block;
      font-size: 14px;
      line-height: calc(18 / 14);

      input {
        margin-top: 8px;
        margin-bottom: 0;
      }
    }

    input {
      font-size: 16px;
      line-height: calc(24 / 16);
      width: 341px;
      height: 52px;
    }
  }
`;

export const AddInfo = styled.div`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: #efede880;
  }
  input {
    padding: 14px;
    margin-top: 4px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: #efede8;
    border: 1px solid #efede84d;
    border-radius: 12px;
    background-color: transparent;
    width: 160px;
  }

  @media (min-width: 768px) {
    width: 696px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

    label {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    input {
      margin-top: 8px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`;

export const Data = styled.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media (min-width: 768px) {
    width: calc((696px - 14px) / 2);
  }
`;

export const Height = styled.label`
  @media (min-width: 768px) {
    input {
      width: 168px;
    }
  }
`;

export const CurWeight = styled(Height)`
  input {
    width: 161px;
  }
  @media (min-width: 768px) {
    input {
      width: 159px;
    }
  }
`;

export const Text = styled.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: #efede880;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const Calendar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;
`;

export const DesWeight = styled.label`
  width: 160px;

  @media (min-width: 768px) {
    width: 140px;
    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`;

export const Birthday = styled(DesWeight)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media (min-width: 768px) {
    width: 187px;
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

export const Blood = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`;

export const Gender = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`;

export const RadioBox = styled.input`
  width: 20px;
  height: 20px;
  display: block;
  margin: 0;

  &::before {
    content: '';
    display: flex;
    align-items: center;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: 2px solid #636366;
    background-color: black;
  }

  &:checked&::before {
    /* outline: thick double #0e0e0d; */
    background-color: #ef8964;
  }
`;

export const HealthInfo = styled.div`
  width: 335px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const Lifestyle = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 32px 0 38px 0;
  }
  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;
