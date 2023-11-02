import styled from '@emotion/styled';

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 40px;
  }
`;

export const CalendarWrapperDiv = styled.div`
  width: 125px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 161px;
  }
`;

export const InputWrapperDiv = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: scale 300ms ease-in-out;

  :hover {
    scale: 1.05;
    p {
      color: ${({ theme }) => theme.color.orangeSecond};
    }
    svg {
      stroke: ${({ theme }) => theme.color.white};
    }
  }
`;

export const InputTextP = styled.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    scale 300ms ease-in-out;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
  }
`;
export const CalendarIconDiv = styled.div`
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.color.orangeSecond};
    transition:
      stroke 300ms ease-in-out,
      scale 300ms ease-in-out;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    stroke: ${({ theme }) => theme.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  :hover:not(&[disabled]) svg {
    transform: scale(1.15);
    stroke: ${({ theme }) => theme.color.orangeSecond};
  }

  &[disabled] svg {
    cursor: not-allowed;
    stroke: ${({ theme }) => theme.color.grayDisabled};
  }
`;
