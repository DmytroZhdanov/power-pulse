import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const animationClose = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${animationClose} 300ms linear;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #10100f;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 14px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const CloseModalButton = styled.button`
  width: 22px;
  height: 22px;
  color: #efede8;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const CloseModalIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;
