import ExercisesItem from '../ExercisesItem/ExercisesItem';
import { ExerciseList } from './ExercisesList.styled';
import exercises from './exercises.json';
import { useParams } from 'react-router';
import { useLazyFetchAllExercisesQuery } from '../../../redux/api';
import { useEffect, useState } from 'react';

export function ExercisesList() {
  const { subcategory } = useParams();
  const [page, setPage] = useState(1);
  const [exerciseData, setExerciseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [fetchAllExercises, { data }] = useLazyFetchAllExercisesQuery();

  console.log(subcategory);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchAllExercises({ page }).unwrap();

        const newData = response.map(item => ({
          _id: item._id,
          name: item.name,
          bodyPart: item.bodyPart,
          burnedCalories: item.burnedCalories,
          target: item.target,
        }));

        setExerciseData(prevData => [...prevData, ...newData]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetch();
  }, [fetchAllExercises, page]);

  return (
    <div>
      <ExerciseList>
        {exerciseData.map(({ _id, name, bodyPart, burnedCalories, target }) => (
          <ExercisesItem
            key={_id}
            name={name}
            bodyPart={bodyPart}
            burnedCalories={burnedCalories}
            target={target}
          />
        ))}
      </ExerciseList>

      <button
        type="button"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Add more
      </button>
    </div>
  );
}
