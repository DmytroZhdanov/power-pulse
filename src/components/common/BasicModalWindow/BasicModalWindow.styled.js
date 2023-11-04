import styled from '@emotion/styled';

export const ModalBackdropDiv = styled.div`
  background: ${({ theme }) => theme.color.backdropBackground};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;

  &.backdrop-wrapper-enter {
    opacity: 0;
  }

  &.backdrop-wrapper-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  /* For unmounting */
  &.backdrop-wrapper-exit {
    opacity: 1;
  }

  &.backdrop-wrapper-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out 200ms;
  }
`;

export const ModalDiv = styled.div`
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: ${({ theme }) => theme.color.modalBackground};
  /* border: 1px solid ${({ theme }) => theme.color.borderModal}; */
  border: 1px solid
    ${({ type, theme }) => {
      switch (type) {
        case 'Success':
          return theme.color.circleGreen;

        case 'Error':
          return theme.color.circleRed;

        case 'Warning':
          return theme.color.orangeSecond;

        default:
          break;
      }
    }};
  border-radius: 12px;
  overflow-y: auto;

  &.modal-wrapper-enter {
    opacity: 0;
    scale: 0.5;
  }

  &.modal-wrapper-enter-active {
    opacity: 1;
    scale: 1;
    transition:
      opacity 200ms ease-in-out 200ms,
      scale 200ms ease-in-out 200ms;
  }

  /* For unmounting */
  &.modal-wrapper-exit {
    opacity: 1;
    scale: 1;
  }

  &.modal-wrapper-exit-active {
    opacity: 0;
    scale: 0.5;

    transition:
      opacity 200ms ease-in-out,
      scale 200ms ease-in-out;
  }
`;

export const CloseModalButton = styled.button`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  transition: color ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.hover};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }
`;

export const CloseModalIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: currentColor;
`;
