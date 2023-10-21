import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 245px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    padding-top: 280px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0;
    display: flex;
    flex-direction: row;
    gap: 16px;
    font-size: 16px;
    line-height: 1.5;
    margin-right: 0;
  }
`;
export const DiaryLink = styled(Link)`
  text-decoration: none;
  padding: 10px 27px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  color: #efede8;
  font-size: 14px;
  line-height: 1.29;
  &:hover,
  :focus {
    background-color: #e6533c;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ProductsLink = styled(DiaryLink)``;

export const ExercisesLink = styled(DiaryLink)``;
