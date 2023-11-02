import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DayExerDiv = styled.div`
  padding: 16px 8px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.grayDisabled};
  border-radius: 12px;
  background: ${({ theme }) => theme.color.grayFourth};

  @media screen and (max-width: 767px) {
    min-height: 335px;
    max-height: 1164px;
    padding-left: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 16px 8px;
    height: 234px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 16px;
  }
`;

export const DayExerTextP = styled.p`
  color: ${({ theme }) => theme.color.grayFirst};
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: ${18 / 14};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: ${24 / 16};
  }
`;

export const LoaderDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DayExerTitleH2 = styled.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18 / 14};
`;

export const DayExerListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin-right: 6px;
    padding-left: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding: 0;
  }
`;

export const AddExerBtnLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AddExerBtnTextP = styled.p`
  color: ${({ theme }) => theme.color.orangeFirst};
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: ${18 / 14};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: ${24 / 16};
  }
`;

export const AddExerBtnIcon = styled.svg`
  width: 16px;
  height: 16px;
`;
