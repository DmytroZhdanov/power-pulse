import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  BurnedCalories,
  BurnedCaloriesLabel,
  BurnedCaloriesValue,
  ButtonSubmit,
  ControlButton,
  ExerciseContainer,
  ExerciseInfo,
  Gif,
  Item,
  Label,
  List,
  TimeLabel,
  TimerDisplay,
  Value,
  WorkoutSummary,
} from './AddExerciseForm.styled';

export default function AddExerciseForm({ exercise }) {
  const { gifUrl, bodyPart, equipment, name, target, burnedCalories, time } =
    exercise;
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const summaryData = [
    {
      label: 'Name',
      value: name,
    },
    {
      label: 'Target',
      value: target,
    },
    {
      label: 'Body Part',
      value: bodyPart,
    },
    {
      label: 'Equipment',
      value: equipment,
    },
    {
      label: 'Time',
      value: `${time} minutes`,
    },
  ];

  const staticData = {
    timerLabel: 'Time',
    caloriesLabel: 'Burned calories:',
    buttonName: 'Add to diary',
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const burnedCaloriesValue = Math.floor(((timer / 60) * burnedCalories) / 3);

  const handleSubmit = () => {
    const collectedData = {
      exerciseId: exercise._id.$oid,
      date: new Date(),
      time: timer,
      calories: burnedCaloriesValue,
    };
    setIsRunning(false);
    console.log('collectedData:', collectedData);
  };

  const timerContent = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `
    ${minutes.toString().padStart(2, '0')} :
    ${seconds.toString().padStart(2, '0')}
    `;
  };

  return (
    <ExerciseContainer>
      <ExerciseInfo>
        <Gif src={gifUrl} alt="Exercise technique" />

        <TimeLabel>{staticData.timerLabel}</TimeLabel>

        <TimerDisplay>
          <CountdownCircleTimer
            size={125}
            isPlaying={isRunning}
            duration={time * 1}
            colors="#E6533C"
            trailColor="#262625"
            strokeWidth={4}
            trailStrokeWidth={5}
            strokeLinecap="round"
            rotation="counterclockwise"
            onComplete={() => ({
              shouldRepeat: true,
            })}
            onUpdate={remainingTime => {
              setTimer(time * 60 - remainingTime);
            }}
          >
            {timerContent}
          </CountdownCircleTimer>
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

        <BurnedCalories>
          <BurnedCaloriesLabel>{staticData.caloriesLabel}</BurnedCaloriesLabel>
          <BurnedCaloriesValue>{burnedCaloriesValue}</BurnedCaloriesValue>
        </BurnedCalories>
      </ExerciseInfo>
      <WorkoutSummary>
        <List>
          {summaryData.map(({ label, value }) => (
            <Item key={value}>
              <Label>{label}</Label>
              <Value>{value}</Value>
            </Item>
          ))}
        </List>

        <ButtonSubmit onClick={handleSubmit}>
          {staticData.buttonName}
        </ButtonSubmit>
      </WorkoutSummary>
    </ExerciseContainer>
  );
}
