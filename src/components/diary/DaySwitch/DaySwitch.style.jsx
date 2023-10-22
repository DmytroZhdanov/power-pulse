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

  @media screen and (min-width: 768px) {
    width: 161px;
  }

  div:hover > .calendar-svg,
  div:hover > .calendar-input-text {
    transform: scale(1.02);
    stroke: #efede8;
    color: #ef8964;
  }

  .calendar-svg {
    width: 20px;
    height: 20px;
    stroke: #ef8964;
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  .calendar-input-text {
    user-select: none;
    font-size: 18px;
    font-weight: 700;
    transition:
      color 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      font-size: 24px;
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
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;
  }
  :hover:not(&[disabled]) svg {
    transform: scale(1.15);
    stroke: #ef8964;
  }

  &[disabled] svg {
    cursor: not-allowed;
    stroke: rgba(239, 237, 232, 0.2);
  }
`;
