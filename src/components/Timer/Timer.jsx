import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import Icon from 'components/common/IconsComp/Icon';
import AnimatedIcon from './AnimatedIcon';
import * as TimerStyled from './Timer.styled';

const Timer = ({
  timerLabel,
  duration,
  setTimer,
  roundsCount,
  setRoundsCount,
  stopTimer,
  setStopTimer,
}) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (stopTimer) {
      setIsRunning(!stopTimer);
      setStopTimer(false);
    }
  }, [setStopTimer, stopTimer]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const timerContent = ({ remainingTime }) => {
    const timerCount = duration - remainingTime;
    const minutes = Math.floor(timerCount / 60);
    const seconds = timerCount % 60;

    return (
      <TimerStyled.TimerValueWrap onClick={toggleTimer}>
        <TimerStyled.TimerWrapIcon className="timer-display-icon">
          {isRunning ? <Icon name="pause" /> : <Icon name="play" />}
        </TimerStyled.TimerWrapIcon>
        <TimerStyled.TimerValue>{`
        ${minutes.toString().padStart(2, '0')} :
        ${seconds.toString().padStart(2, '0')}
        `}</TimerStyled.TimerValue>
        <TimerStyled.TimerValue>Round: {roundsCount}</TimerStyled.TimerValue>
      </TimerStyled.TimerValueWrap>
    );
  };

  return (
    <>
      <TimerStyled.TimerLabel>{timerLabel}</TimerStyled.TimerLabel>
      <TimerStyled.TimerDisplay>
        <CountdownCircleTimer
          size={125}
          isPlaying={isRunning}
          colors="#E6533C"
          trailColor="#262625"
          strokeLinecap="round"
          strokeWidth={4}
          trailStrokeWidth={5}
          duration={duration}
          isGrowing={true}
          rotation="counterclockwise"
          onComplete={() => {
            setRoundsCount(prev => prev + 1);
            return {
              shouldRepeat: true,
            };
          }}
          onUpdate={remainingTime => {
            setTimer(duration - remainingTime);
          }}
        >
          {timerContent}
        </CountdownCircleTimer>
        <AnimatedIcon isRunning={isRunning} animationDuration={duration} />
      </TimerStyled.TimerDisplay>
      <TimerStyled.ControlButton onClick={toggleTimer}>
        {isRunning ? <Icon name="pause" /> : <Icon name="play" />}
      </TimerStyled.ControlButton>
    </>
  );
};
export default Timer;

Timer.propTypes = {
  timerLabel: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  setTimer: PropTypes.func.isRequired,
  roundsCount: PropTypes.number.isRequired,
  setRoundsCount: PropTypes.func.isRequired,
  stopTimer: PropTypes.bool.isRequired,
  setStopTimer: PropTypes.func.isRequired,
};
