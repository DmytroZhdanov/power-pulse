import styled from '@emotion/styled';

export const ListCategories = styled.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 32px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InputCategory = styled.input`
  display: none;
`;

export const ItemCategory = styled.div`
  position: relative;
`;

export const LabelCategory = styled.label`
  color: rgba(239, 237, 232, 0.4);
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #ef8964;
    background-color: transparent;
  }

  ${props =>
    props.selected &&
    `color: #EFEDE8;;
    ::before {
      background-color: #EF8964; 
    }
  `}
`;
