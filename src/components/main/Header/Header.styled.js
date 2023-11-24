import styled from '@emotion/styled';

export const BoxHeader = styled.header`
  width: 100%;
  border-bottom: ${({ logged, theme }) =>
    logged ? `1px solid ${theme.color.grayDisabled}` : 'none'};
  position: ${props => (props.logged ? 'static' : 'absolute')};
`;

export const HeaderWrapDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 61px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  z-index: 5;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 744px;
    height: 84px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1288px;
  }
`;
export const BackdropDiv = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.5);

  &.backdrop-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.backdrop-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition:
      opacity 300ms,
      transform 300ms;
  }

  &.backdrop-exit {
    opacity: 1;
  }

  &.backdrop-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition:
      opacity 300ms,
      transform 300ms;
  }
`;

export const Burger = styled.div`
  &.modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition:
      opacity 300ms,
      transform 300ms;
  }

  /* For unmounting */
  &.modal-exit {
    opacity: 1;
  }

  &.modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition:
      opacity 300ms,
      transform 300ms;
  }
`;
