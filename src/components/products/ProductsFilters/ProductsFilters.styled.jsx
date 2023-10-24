import styled from '@emotion/styled';
import Select from 'react-select';

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

export const SelectRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;

export const SelectContainer = styled.div`
  flex: 1;
  /*padding: 14px;*/
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledSelect = styled(Select)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: rgba(0, 0, 0, 0.5);

  color: #efede8;
  font-size: 14px;
  line-height: calc(18 / 14);
  /*/*appearance: none;*/

  .css-13cymwt-control {
    background: #040404;
    /*border-radius: 12px;
    border: 0px solid rgba(239, 237, 232, 0.3);*/
  }

  .css-t3ipsp-control,
  /*.react-select-container,*/
  /*.css-kc1wmj,*/
  /*.css-1pahdxg-control,*/
  .css-1nmdiq5-menu {
    /*background-color: #040404;*/
  }

  /*.css-t3ipsp-control,
  .react-select-container,
  .css-kc1wmj,*/
  .css-1pahdxg-control {
    /*background-color: #040404;*/
  }

  /*.css-1xc3v61-indicatorContainer,*/
  .css-4xgw5l-IndicatorsContainer2 {
    /* Настройка стилей индикатора (стрелки) */
    /*display: none;*/
  }

  /*.css-1jqq78o-placeholder,*/
  .css-1dimb5e-singleValue {
    /*color: #efede8;*/
  }
`;

export const FormControl = styled.div``;
