import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SettingsLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 32px;
  }
`;

export const SvgSettings = styled.svg`
  stroke: rgba(239, 237, 232, 0.3);

  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const Avatar = styled.div`
  width: 37px;
  height: 37px;
  background-color: #111111;
  border: 1px solid #e6533c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const SvgDefault = styled.svg`
  stroke: rgba(239, 237, 232, 0.3);

  width: 21px;
  height: 21px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
