import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DayExerDiv = styled.div`
  padding: 16px 8px;
  position: relative;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
  @media screen and (max-width: 767px) {
    min-height: 335px;
    max-height: 1164px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 8px;
    height: 234px;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px;
  }
`;

export const DayExerText = styled.h2`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: ${18 / 14};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24 / 16};
  }
`;

export const LoaderDiv = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DayExerTitle = styled.h2`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: ${18 / 14};
`;

export const DayExerDivList = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin-right: 6px;
    padding-left: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const AddExerBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AddExerBtnText = styled.p`
color: #e6533c;
font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: ${18 / 14};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24 / 16};
  }
`;

export const AddExerBtnIcon = styled.svg`
  width: 16px;
  height: 16px;
`;
