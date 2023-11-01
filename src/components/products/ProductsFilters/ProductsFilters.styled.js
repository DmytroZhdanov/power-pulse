import styled from '@emotion/styled';
import Select from 'react-select';

export const TitleP = styled.p`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    z-index: 1;
    display: block;
    position: relative;
    top: -28px;
    left: -65px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const DivFilter = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
    gap: 16px;
  }
`;

export const DivSearch = styled.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayFirst};
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.orangeFirst};
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 236px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const SvgSearch = styled.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: ${({ theme }) => theme.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const BtnClean = styled.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`;

export const SelectRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`;

export const SelectContainer = styled.div`
  flex: 1;
  z-index: 2;
  background-color: transparent;
`;

export const StyledSelect = styled(Select)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayFirst};
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);
`;
