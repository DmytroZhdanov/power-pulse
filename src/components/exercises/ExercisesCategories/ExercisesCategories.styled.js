import styled from '@emotion/styled';

export const CategoriesFieldset = styled.fieldset`
  margin-top: 20px;

  display: flex;
  font-size: 14px;
  gap: 28px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    gap: 32px;
  }
`;

export const CategoryInput = styled.input`
  display: none;
`;

export const CategoryDiv = styled.div`
  position: relative;
`;

export const CategoryLabel = styled.label`
  color: ${({ theme }) => theme.color.grayThird};
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.orangeSecond};
    background-color: transparent;
  }

  ${({ selected, theme }) =>
    selected &&
    `color: #EFEDE8;
    ::before {
      background-color: ${theme.color.orangeSecond}; 
    }
  `}
`;
