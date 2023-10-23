import styled from '@emotion/styled';

export const IconWrapper = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 125px;
  height: 125px;
  top: 0;
  border-radius: 50%;
  position: absolute;
  animation: spin 180s linear infinite;
`;
export const Icon = styled.svg`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -1px;

  right: 50%;
`;
