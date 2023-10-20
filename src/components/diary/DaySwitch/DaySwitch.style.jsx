import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const CalendarWrapper = styled.div`
  width: 161px;
  p {
    color: #efede8;
    font-family: Roboto;
    font-size: 24px;

    font-weight: 700;
    line-height: 1.33; /* 133.333% */
  }
`;
export const ButtonsWrapper = styled.div``;
export const Button = styled.button`
  border: none;

  background-color: transparent;

  &[disabled] svg {
    stroke: rgba(239, 237, 232, 0.2);
  }
  svg {
    stroke: #efede8;
  }
`;
