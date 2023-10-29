import styled from '@emotion/styled';

export const WrapperTitleCategoriesDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 64px;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;
