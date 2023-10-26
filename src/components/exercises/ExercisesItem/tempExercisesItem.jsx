import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';
import AddExerciseSuccess from '../AddExerciseSuccess/AddExerciseSuccess';
import { useState } from 'react';

export default function ExercisesItem() {
  const [onShowModalExerciseForm, setOnShowModalExerciseForm] = useState(false);
  const [onShowModalExerciseSuccess, setOnShowModalExerciseSuccess] =
    useState(false);
  const [modalExerciseSuccessData, setModalExerciseSuccessData] = useState({});

  const openModalExerciseForm = () => {
    setOnShowModalExerciseForm(true);
  };
  const openModalExerciseSuccess = () => {
    setOnShowModalExerciseSuccess(true);
  };

  const closeModalExerciseForm = () => {
    setOnShowModalExerciseForm(false);
  };
  const closeModalExerciseSuccess = () => {
    setOnShowModalExerciseSuccess(false);
  };

  const exercise = {
    _id: {
      $oid: '64f2458d6f67bc34bae4f7f7',
    },
    bodyPart: 'chest',
    equipment: 'leverage machine',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
    name: 'assisted chest dip (kneeling)',
    target: 'pectorals',
    burnedCalories: 329,
    time: 3,
  };

  return (
    <>
      <button onClick={openModalExerciseForm} type="button">
        show
      </button>
      {onShowModalExerciseForm && (
        <BasicModalWindow onClose={closeModalExerciseForm}>
          <AddExerciseForm
            exercise={exercise}
            openModalExerciseSuccess={openModalExerciseSuccess}
            closeModalExerciseForm={closeModalExerciseForm}
            setModalExerciseSuccessData={setModalExerciseSuccessData}
          />
        </BasicModalWindow>
      )}

      {onShowModalExerciseSuccess && (
        <BasicModalWindow onClose={closeModalExerciseSuccess}>
          <AddExerciseSuccess
            modalExerciseSuccessData={modalExerciseSuccessData}
            closeModalExerciseSuccess={closeModalExerciseSuccess}
          />
        </BasicModalWindow>
      )}
    </>
  );
}
