import styled from '@emotion/styled';
import { Field } from 'formik';

export const Text = styled.p`
  margin-top: 14px;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 496px;
    gap: 16px;
  }
`;

export const Inputs = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`;

export const Input = styled(Field)`
  display: flex;
  width: auto;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 14px;
  align-items: center;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  border-radius: 12px;
  border: 1px solid;
  border-color: blue;

  @media screen and (min-width: 375px) {
    width: 283px;
  }
  @media screen and (min-width: 768px) {
    width: 307px;
  }
`;

export const Button = styled.button`
  margin-top: 28px;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--orange, #e6533c);

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
  :hover {
    background: var(--orange-1, #ef8964);
  }
`;

export const ErrorText = styled.p`
  color: #d80027;

  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;

  [Input] {
    border-color: red;
  }
`;


