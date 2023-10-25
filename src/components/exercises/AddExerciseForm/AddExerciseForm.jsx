import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CaloriesDiv,
  CaloriesLabel,
  CaloriesValue,
  ButtonSubmit,
  ExerciseContainer,
  ExerciseInfo,
  Gif,
  Item,
  Label,
  List,
  TimerLabel,
  Value,
  WorkoutSummary,
} from './AddExerciseForm.styled';
import Timer from '../../Timer/Timer';

export default function AddExerciseForm({ exercise }) {
  const { gifUrl, bodyPart, equipment, name, target, burnedCalories, time } =
    exercise;
  const [timer, setTimer] = useState(0);
  const [roundsCount, setRoundsCount] = useState(0);

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

  const caloriesPerMinute = burnedCalories / time;
  const burnedCaloriesCount = Math.floor(
    (timer / 60) * caloriesPerMinute + roundsCount * burnedCalories,
  );

  const handleSubmit = () => {
    const collectedData = {
      exerciseId: exercise._id.$oid,
      time: timer + roundsCount * time * 60,
      calories: burnedCaloriesCount,
    };

    console.log('collectedData:', collectedData);
  };

  return (
    <ExerciseContainer>
      <ExerciseInfo>
        <Gif src={gifUrl} alt="Exercise technique" />

        <TimerLabel>{staticData.timerLabel}</TimerLabel>
        <Timer
          roundsCount={roundsCount}
          setRoundsCount={setRoundsCount}
          setTimer={setTimer}
          duration={time * 60}
        />

        <CaloriesDiv>
          <CaloriesLabel>{staticData.caloriesLabel}</CaloriesLabel>
          <CaloriesValue>{burnedCaloriesCount}</CaloriesValue>
        </CaloriesDiv>
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

AddExerciseForm.propTypes = {
  exercise: PropTypes.shape({
    gifUrl: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    burnedCalories: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};
