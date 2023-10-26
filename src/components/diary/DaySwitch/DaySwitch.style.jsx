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

  @media screen and (min-width: 768px) {
    width: 161px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InputText = styled.p`
  user-select: none;
  font-size: 18px;
  font-weight: 700;
  transition:
    color 300ms ease-in-out,
    transform 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const CalendarIcon = styled.div`
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.color.orangeSecond};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
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
    stroke: ${({theme}) => theme.color.grayDisabled};
  }
`;
