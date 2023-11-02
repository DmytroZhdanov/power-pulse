import styled from '@emotion/styled';

export const TimerWrapIcon = styled.div`
  position: absolute;
  rotate: 180deg;
  z-index: -1;
  top: 50%;
  left: 52%;
  translate: -50% -50%;
  cursor: pointer;

  svg {
    cursor: pointer;
    opacity: 0.5;
    width: 80px;
    height: 80px;
    stroke: #5b5a5a;
    fill: #262625;

    transition:
      scale 200ms ease-in-out,
      opacity 200ms ease-in-out;
  }
`;

export const TimerValueWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;
  z-index: 100;
`;

export const TimerDisplay = styled.div`
  margin-bottom: 14px;
  position: relative;

  div:first-of-type svg {
    transform: rotate(180deg);
  }

  :hover {
    .timer-display-icon svg {
      scale: 1.05;
      opacity: 0.8;
    }
  }
`;

export const TimerLabel = styled.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`;

export const TimerValue = styled.p`
  color: #efede8;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  user-select: none;
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

  svg {
    width: 15px;
    height: 15px;
    stroke: #efede8;
    fill: #efede8;
  }

  :hover {
    transform: scale(1.1);
  }
`;
