import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  margin-bottom: 32px;
`;

export const TextLabel = styled.label`
  position: relative;
  display: inline-block;
  span {
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity: 0;
    color: rgba(239, 237, 232, 0.6);
    font-size: 14px;
  }
  input:focus + span,
  input:not(:placeholder-shown) + span {
    opacity: 1;
    transform: scale(0.75) translateY(-22px) translateX(0);
  }

  div {
    position: absolute;
    top: 102%;
    left: 4px;
    color: red;
    font-size: 10px;
  }
`;
export const TextInput = styled.input`
  /* position: relative; */

  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px 0 14px 14px;
  font-size: 16px;
  line-height: 24px;

  color: rgba(239, 237, 232, 0.6);
  width: 153px;
  background-color: transparent;

  :hover,
  :focus {
    border: 1px solid #e6533c;
    outline: none;
  }
`;
export const BirthdayInput = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px 14px 14px 14px;

  font-size: 16px;
  line-height: 24px;

  color: rgba(239, 237, 232, 0.6);
  width: 153px;
  background-color: transparent;
  :hover,
  :focus {
    border: 1px solid #e6533c;
    outline: none;
  }
  margin-top: 4px;
`;

export const RadioContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  margin-bottom: 32px;
  legend {
    margin-bottom: 16px;
    font-size: 16px;
    color: rgb(239, 237, 232);
  }
  label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 16px;
    color: rgb(239, 237, 232);
    cursor: pointer;
  }
`;

export const RadioLabel = styled.label`
  span {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid #ef8964;

    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      border-radius: 50%;
      width: 12px;
      height: 12px;
      display: none;
      background-color: #ef8964;
    }
  }
`;

export const RadioInput = styled.input`
  appearance: none;
  :checked ~ span::after {
    display: block;
  }
`;
