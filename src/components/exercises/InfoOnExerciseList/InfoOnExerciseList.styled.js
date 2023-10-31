import styled from '@emotion/styled';

export const ListUl = styled.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 0;
  }
`;

export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayDisabled};
  background: ${({ theme }) => theme.color.white}0d;
`;

export const LabelP = styled.p`
  color: ${({ theme }) => theme.color.white}66;
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const ValueP = styled.p`
  margin: auto 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  ::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
