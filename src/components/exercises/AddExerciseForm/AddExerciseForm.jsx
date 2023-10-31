import { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Timer from 'components/Timer/Timer';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';
import AddExercisesFromPastDaysForm from 'components/exercises/AddExercisesFromPastDaysForm/AddExercisesFromPastDaysForm';
import InfoOnExerciseList from 'components/exercises/InfoOnExerciseList/InfoOnExerciseList';
import {
  ButtonOpenPastDaysForm,
  ButtonSubmit,
  ButtonWrapperDiv,
  CaloriesDiv,
  CaloriesLabelP,
  CaloriesValueP,
  ExerciseContainerDiv,
  ExerciseInfoDiv,
  GifImg,
  WorkoutSummaryDiv,
} from './AddExerciseForm.styled';

import { useAddExerciseMutation } from 'src/redux/api';

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
      date: format(date, 'yyyy-MM-dd'),
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
    <ExerciseContainerDiv>
      <ExerciseInfoDiv>
        <GifImg src={gifUrl} alt="Exercise technique" />

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
          <CaloriesLabelP>{staticData.caloriesLabel}</CaloriesLabelP>

          <CaloriesValueP>{burnedCaloriesCount}</CaloriesValueP>
        </CaloriesDiv>
      </ExerciseInfoDiv>

      <WorkoutSummaryDiv>
        <InfoOnExerciseList exercise={exercise} />

        <ButtonWrapperDiv>
          <ButtonOpenPastDaysForm onClick={onShowModalForAddExercise}>
            {staticData.openPastDaysFormBtnName}
          </ButtonOpenPastDaysForm>

          <ButtonSubmit onClick={handleSubmit}>
            {staticData.addExerciseBtnName}
          </ButtonSubmit>
        </ButtonWrapperDiv>
      </WorkoutSummaryDiv>

      <BasicModalWindow
        onShow={showModalForAddExercise}
        onClose={() => {
          setShowModalForAddExercise(false);
        }}
      >
        <AddExercisesFromPastDaysForm onSubmit={handleSubmit} />
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
    </ExerciseContainerDiv>
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
