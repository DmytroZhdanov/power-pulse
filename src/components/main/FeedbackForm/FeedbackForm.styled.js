import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  padding: 40px 20px;
  max-height: 90vh;

  @media screen and (max-width: 374px) {
    width: calc(100vw - 80px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 295px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 400px;
    padding: 50px 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 500px;
    padding: 60px 50px;
  }
`;

export const TitleH2 = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;

  font-size: 24px;
  line-height: calc(28 / 24);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 28px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  background-color: transparent;
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.grayFifth : theme.color.white};
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  padding: 14px;
  border-radius: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  line-height: calc(20 / 16);
`;

export const Check = styled.div`
  position: relative;
  color: ${({ type, theme }) => {
    switch (type) {
      case 'invalid':
        return theme.color.inputError;
      case 'valid':
        return theme.color.inputSuccess;
      default:
        return theme.color.grayFirst;
    }
  }};

  &::after {
    ${({ required, theme }) =>
      required && {
        content: '"*"',
        position: 'absolute',
        top: 0,
        right: '-10px',
        color: theme.color.orangeFirst,
      }}
  }

  input,
  textarea {
    border: ${({ type, theme }) => {
      switch (type) {
        case 'invalid':
          return `1px solid ${theme.color.inputError}`;
        case 'valid':
          return `1px solid ${theme.color.inputSuccess}`;
        default:
          return `1px solid ${theme.color.grayFirst}`;
      }
    }};

    &:hover,
    &:focus {
      border: 1px solid ${({ theme }) => theme.color.orangeFirst};
    }
  }
`;

export const Message = styled.div`
  margin-top: 4px;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: 0.12px;

  div {
    display: flex;
    gap: 4px;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 16px;
  }
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px auto 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1439px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 12px 40px;
  border-radius: 12px;
  background-color: ${({ type, theme }) =>
    type === 'button' ? 'transparent' : theme.color.orangeFirst};
  border: ${({ type, theme }) =>
    type === 'button' ? `1px solid ${theme.color.grayFirst}` : 'none'};
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  line-height: calc(18 / 16);

  transition:
    background-color ${({ theme }) => theme.transition.main},
    border ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background-color: ${({ type, theme }) => {
      switch (type) {
        case 'submit':
          return `${theme.color.hover}`;

        case 'button':
          return 'transparent';

        default:
          break;
      }
    }};

    border: ${({ type, theme }) => {
      switch (type) {
        case 'submit':
          return 'none';

        case 'button':
          return `1px solid ${theme.color.hoverBorder}`;

        default:
          break;
      }
    }};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;

export const TextWrapperDiv = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 12px;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.color.orangeSecond};
  border-radius: 50%;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.color.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 30px;
    height: 30px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 40px;
    height: 40px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const TextP = styled.p`
  :nth-of-type(1) {
    margin-bottom: 12px;
  }

  @media screen and (max-width: 374px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    line-height: calc(20 / 16);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;
