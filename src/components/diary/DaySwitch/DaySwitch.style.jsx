import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const CalendarWrapper = styled.div`
  width: 125px;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 161px;
  }

  .calendar-svg {
    width: 20px;
    height: 20px;
    stroke: #ef8964;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  .calendar-input-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.11;

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.33;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    stroke: #efede8;
  }

  &[disabled] svg {
    stroke: rgba(239, 237, 232, 0.2);
  }
`;
