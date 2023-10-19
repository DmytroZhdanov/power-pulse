import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';
import AddExerciseSuccess from '../AddExerciseSuccess/AddExerciseSuccess';

export default function ExercisesItem() {
  return (
    <>
      <div>ExercisesItem component</div>
      <BasicModalWindow>
        <AddExerciseForm />
      </BasicModalWindow>
      <BasicModalWindow>
        <AddExerciseSuccess />
      </BasicModalWindow>
    </>
  );
}
