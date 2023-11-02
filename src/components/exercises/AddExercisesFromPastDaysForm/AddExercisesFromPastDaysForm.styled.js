import styled from '@emotion/styled';

export const WrapperDiv = styled.div`
  padding: 50px 45px 30px 45px;
  display: flex;
  gap: 35px;
  flex-direction: column;
`;

export const InputWrapperDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InputLabelSpan = styled.span`
  color: ${({ theme }) => theme.color.label};
  font-size: 16px;
  line-height: 1.29;
`;

export const InputTime = styled.input`
  width: 100%;
  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  line-height: 1.29;

  &:not(:placeholder-shown) + span {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 167px;
    padding: 12px;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  right: 5px;
  bottom: -22px;
  color: #D80027;

  &.error-message-enter {
    opacity: 0;
  }

  &.error-message-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }

  &.error-message-exit {
    opacity: 1;
  }

  &.error-message-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
`;

export const InputBeforeSpan = styled.span`
  position: absolute;
  right: 15px;
  bottom: 12px;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    right: 15px;
    bottom: 16px;
  }
`;

export const WrapperCalendarInputDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 167px;
    padding: 12px;
  }
`;

export const CalendarInputTextP = styled.p`
  color: ${({ theme }) => theme.color.white};

  font-size: 16px;
  line-height: 1.5;
`;

export const CalendarIconDiv = styled.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ButtonAdd = styled.button`
  width: 151px;
  padding: 12px 32px;
  border: none;
  color: ${({ theme }) => theme.color.white};

  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.orangeFirst};
  line-height: 1.29;

  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.color.hoverBorder};
    background: ${({ theme }) => theme.color.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`;
