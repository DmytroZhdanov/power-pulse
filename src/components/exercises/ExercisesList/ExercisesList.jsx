import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { useLazyFetchAllExercisesQuery } from '../../../redux/api';

import { ExerciseList } from './ExercisesList.styled';
import exercises from './exercises.json';

function bodyPartsFilter(value) {
  return exercises
    .filter(exercises => exercises.bodyPart === value)
    .slice(0, 10);
}

export default function ExercisesList() {
  return (
    <ExerciseList>
      {bodyPartsFilter('waist').map(
        ({ _id, name, bodyPart, burnedCalories, target }) => (
          <ExercisesItem
            key={_id.$oid}
            name={name}
            bodyPart={bodyPart}
            burnedCalories={burnedCalories}
            target={target}
          ></ExercisesItem>
        ),
      )}
    </ExerciseList>
  );
}
