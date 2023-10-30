import PropTypes from 'prop-types';
import { useState } from 'react';

import { useAddExerciseMutation } from 'src/redux/api';
import Timer from 'src/components/Timer/Timer';
import BasicModalWindow from 'src/components/common/BasicModalWindow/BasicModalWindow';
import ErrorMessage from 'src/components/common/ErrorMessage/ErrorMessage';
import AddExercisesFromPastDaysForm from '../AddExercisesFromPastDaysForm/AddExercisesFromPastDaysForm';
import InfoOnExerciseList from '../InfoOnExerciseList/InfoOnExerciseList';

import {
  ButtonOpenPastDaysForm,
  ButtonSubmit,
  ButtonWrapper,
  CaloriesDiv,
  CaloriesLabel,
  CaloriesValue,
  ExerciseContainer,
  ExerciseInfo,
  Gif,
  WorkoutSummary,
} from './AddExerciseForm.styled';

export default function AddExerciseForm({
  exercise,
  openModalExerciseSuccess,
  closeModalExerciseForm,
  setModalExerciseSuccessData,
}) {
  const { _id, gifUrl, burnedCalories, time } = exercise;

  const [showModalForAddExercise, setShowModalForAddExercise] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [notificationType, setNotificationType] = useState('');
  const [timer, setTimer] = useState(0);
  const [roundsCount, setRoundsCount] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);

  const [addExercise] = useAddExerciseMutation();

  const caloriesPerMinute = burnedCalories / time;
  const burnedCaloriesCount = Math.floor(
    (timer / 60) * caloriesPerMinute + roundsCount * burnedCalories,
  );

  const totalTame = timer + roundsCount * time * 60;

  const handleSubmit = async ({ time = totalTame, date = new Date() }) => {
    setStopTimer(true);
    const calories = Math.floor(
      (time / 60) * caloriesPerMinute + roundsCount * burnedCalories,
    );

    const collectedData = {
      exercise_ID: _id,
      date,
      time,
      calories,
    };

    if (collectedData.time < 60) {
      setErrorMessage(
        `To achieve results, the training time should be more than one minute. Your time ${collectedData.time} sec.`,
      );
      setNotificationType('Notice: ');
      setShowModalError(true);
      return;
    }

    const { error } = await addExercise(collectedData);

    if (error) {
      setNotificationType('Error: ');
      setErrorMessage(error.data.message);
      setShowModalError(true);
    } else {
      openModalExerciseSuccess();
      closeModalExerciseForm();
      setModalExerciseSuccessData(collectedData);
    }
  };

  const onShowModalForAddExercise = () => {
    setStopTimer(true);
    setShowModalForAddExercise(true);
  };

  const staticData = {
    timerLabel: 'Time',
    caloriesLabel: 'Burned calories:',
    addExerciseBtnName: 'Add to diary',
    openPastDaysFormBtnName: 'Missing exercises? Add them here',
  };

  return (
    <ExerciseContainer>
      <ExerciseInfo>
        <Gif src={gifUrl} alt="Exercise technique" />

        <Timer
          timerLabel={staticData.timerLabel}
          stopTimer={stopTimer}
          setStopTimer={setStopTimer}
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
        <InfoOnExerciseList exercise={exercise} />

        <ButtonWrapper>
          <ButtonOpenPastDaysForm onClick={onShowModalForAddExercise}>
            {staticData.openPastDaysFormBtnName}
          </ButtonOpenPastDaysForm>
          <ButtonSubmit onClick={handleSubmit}>
            {staticData.addExerciseBtnName}
          </ButtonSubmit>
        </ButtonWrapper>
      </WorkoutSummary>

      <BasicModalWindow
        onShow={showModalForAddExercise}
        onClose={() => {
          setShowModalForAddExercise(false);
        }}
      >
        <AddExercisesFromPastDaysForm
          onClose={() => {
            setShowModalForAddExercise(false);
          }}
          onSubmit={handleSubmit}
        />
      </BasicModalWindow>

      <BasicModalWindow
        onShow={showModalError}
        onClose={() => {
          setShowModalError(false);
        }}
      >
        <ErrorMessage
          notificationType={notificationType}
          message={errorMessage}
        />
      </BasicModalWindow>
    </ExerciseContainer>
  );
}

AddExerciseForm.propTypes = {
  openModalExerciseSuccess: PropTypes.func.isRequired,
  closeModalExerciseForm: PropTypes.func.isRequired,
  setModalExerciseSuccessData: PropTypes.func.isRequired,
  exercise: PropTypes.shape({
    gifUrl: PropTypes.string.isRequired,
    burnedCalories: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};
