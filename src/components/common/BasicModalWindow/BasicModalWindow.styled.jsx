import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  background: ${({ theme }) => theme.color.backdropBackground};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.modalBackground};
  border: 1px solid ${({ theme }) => theme.color.borderModal};
  border-radius: 12px;
  overflow-y: auto;
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

  @media screen and (min-width: 768px) {
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
