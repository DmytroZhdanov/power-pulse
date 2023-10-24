import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #10100f;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  overflow-y: auto;
`;

export const CloseModalButton = styled.button`
  width: 26px;
  height: 26px;
  color: #efede8;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: absolute;
  top: 14px;
  right: 14px;

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
  }
`;

export const CloseModalIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: currentColor;
`;
