import PropTypes from 'prop-types';
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import {
  ControlButton,
  TimerDisplay,
  TimerValue,
  TimerValueWrap,
} from './Timer.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
import AnimatedIcon from './AnimatedIcon';

const Timer = ({ duration, setTimer, roundsCount, setRoundsCount }) => {
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  const timerContent = ({ remainingTime }) => {
    const timerCount = duration - remainingTime;
    const minutes = Math.floor(timerCount / 60);
    const seconds = timerCount % 60;

    return (
      <TimerValueWrap>
        <TimerValue>{`
        ${minutes.toString().padStart(2, '0')} :
        ${seconds.toString().padStart(2, '0')}
        `}</TimerValue>
        <TimerValue>Round: {roundsCount}</TimerValue>
      </TimerValueWrap>
    );
  };

  return (
    <>
      <TimerDisplay>
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
      </TimerDisplay>
      <ControlButton onClick={toggleTimer}>
        <svg width={15} height={15}>
          {isRunning ? (
            <use href={sprite + '#pause'}></use>
          ) : (
            <use href={sprite + '#play'}></use>
          )}
        </svg>
      </ControlButton>
    </>
  );
};
export default Timer;

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
  roundsCount: PropTypes.number.isRequired,
  setTimer: PropTypes.func.isRequired,
  setRoundsCount: PropTypes.func.isRequired,
};
