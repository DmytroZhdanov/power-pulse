import ExercisesItem from '../ExercisesItem/ExercisesItem';

import { ExerciseList } from './ExercisesList.styled';
import exercises from './exercises.json';
import { useParams } from 'react-router';

function bodyPartsFilter(value) {
  return exercises
    .filter(exercises => exercises.bodyPart === value)
    .slice(0, 40);
}

export function ExercisesList() {
  const { subcategory } = useParams();

  return (
    <ExerciseList>
      {bodyPartsFilter(subcategory).map(
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
