import styled from '@emotion/styled';

export const ListCategories = styled.ul`
  display: flex;
  gap: 32px;
`;

export const InputCategory = styled.input`
  display: none;
`;

export const ItemCategory = styled.li`
  position: relative;
`;

export const LabelCategory = styled.label`
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: transparent;
  }

  ${props =>
    props.selected &&
    `
    ::before {
      background-color: #EF8964; 
    }
  `}
`;
