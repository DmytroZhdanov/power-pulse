import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import avocadoImage from '/src/assets/images/Avocado/avocado.png';

export const DivSuccess = styled.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin: 22px 111px;
  }
`;

export const DivImg = styled.div`
  background: url(${avocadoImage}) no-repeat center center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 19px;
  }
`;

export const TitleH2 = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`;

export const DivCalories = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`;

export const CaloriesP = styled.p`
  margin-right: 8px;
  color: ${({ theme }) => theme.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`;

export const ValueCaloriesSpan = styled.span`
  color: ${({ theme }) => theme.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`;

export const ButtonAdd = styled.button`
  width: 157px;
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.orangeFirst};
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.color.hoverBorder};
    background: ${({ theme }) => theme.color.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: calc(24 / 16);
  }
`;

export const DivLink = styled(Link)`
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
  svg {
    stroke: ${({ theme }) => theme.color.grayFirst};
    transition: stroke 300ms ease-in-out;
  }

  :hover p,
  :hover svg {
    color: ${({ theme }) => theme.color.white};
    stroke: ${({ theme }) => theme.color.white};
  }
`;

export const LinkText = styled.p`
  margin-right: 8px;
  transition: color 300ms ease-in-out;
`;
