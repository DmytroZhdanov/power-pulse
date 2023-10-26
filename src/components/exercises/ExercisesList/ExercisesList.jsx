import ExercisesItem from '../ExercisesItem/tempExercisesItem';
import { useOutletContext } from 'react-router-dom';
export function ExercisesList() {
  const category = useOutletContext();

  return (
    <>
      <div>ExercisesList component</div>
      <ExercisesItem />
    </>
  );
}
