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

// export const RadioInput = styled.input`
//   display: grid;
//   place-content: center;
//   font: inherit;
//   appearance: none;
//   background-color: transparent;
//   margin: 0;
//   width: 1.5em;
//   height: 1.5em;
//   border: 0.2em solid #636366;
//   border-radius: 50%;

//   ::before {
//     content: '';
//     width: 0.65em;
//     height: 0.65em;
//     border-radius: 50%;
//     transform: scale(0);
//     transition: 120ms transform ease-in-out;
//     box-shadow: inset 1em 1em orange;
//   }
//   :checked::before {
//     transform: scale(1);
//   }
// `;

export const RadioInput = styled.input`
  appearance: none;
  background-color: transparent;
  margin: 0;

  font: inherit;
  /* color: currentColor; */
  width: 1.5em;
  height: 1.5em;
  border: 0.2em solid #636366;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
  ::before {
    content: '';
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    /* box-shadow: inset 1em 1em var(--form-control-color); */
    background-color: #ef8964;
  }
  :checked::before {
    transform: scale(1);
  }
  :checked {
    border: 0.15em solid #ef8964;
  }
`;
