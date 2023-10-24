import styled from '@emotion/styled';

export const DivSearch = styled.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    /*display: inline-block;*/
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
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: rgba(0, 0, 0, 0.5);
  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
  }
`;

export const SvgSearch = styled.svg`
  position: absolute;
  right: 14px;
  top: 14px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const BtnClean = styled.button`
  position: absolute;
  right: 36px;
  top: 14px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`;
