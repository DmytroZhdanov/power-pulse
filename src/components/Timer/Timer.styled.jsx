import styled from '@emotion/styled';

export const TimerValueWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const TimerDisplay = styled.div`
  margin-bottom: 14px;
  position: relative;

  svg {
    transform: rotate(180deg);
  }
`;

export const TimerValue = styled.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`;

export const ControlButton = styled.button`
  background-color: #e6533c;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  margin-bottom: 8px;
  transition: transform 300ms ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;
