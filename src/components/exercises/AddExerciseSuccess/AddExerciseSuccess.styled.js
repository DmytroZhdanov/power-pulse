import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ExerciseSuccessWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 48px;
  width: 335px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 64px;
    padding-bottom: 64px;
    width: 430px;
  }
`;

export const Img = styled.img`
  margin-bottom: 27px;
  width: 118px;
  height: 73px;

  @keyframes scale {
    0% {
      transform: scale(0.8);
    }
    33% {
      transform: scale(1.3);
    }
    66% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: scale 1500ms linear;
`;

export const TitleH2 = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`;

export const ResultWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
`;

export const TextP = styled.p`
  font-size: 14px;
  line-height: 1.29;
`;

export const ResultLabelSpan = styled.span`
  margin-right: 8px;
  color: ${({ theme }) => theme.color.grayFirst};
`;

export const ResultValueSpan = styled.span`
  color: ${({ theme }) => theme.color.orangeFirst};
`;

export const Button = styled.button`
  margin-bottom: 16px;
  padding: 12px 32px;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.orangeFirst};
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 14px;
    padding-bottom: 14px;
    line-height: 1.5;
  }
`;

export const DiaryLink = styled(Link)`
  color: ${({ theme }) => theme.color.grayFirst};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LinkIconSvg = styled.svg`
  width: 16px;
  height: 16px;
`;
