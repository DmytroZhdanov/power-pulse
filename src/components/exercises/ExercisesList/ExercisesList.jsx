import ExercisesItem from '../ExercisesItem/ExercisesItem';
import {
  ExerciseList,
  LinkText,
  StyledLink,
  Svg,
} from './ExercisesList.styled';
import { useLocation, useOutletContext, useParams } from 'react-router';
import { useLazyFetchAllExercisesQuery } from '../../../redux/api';
import { useEffect, useRef, useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { EXERCISES_CATEGORY } from '../../../utils/constants';

export function ExercisesList() {
  const category = useOutletContext();
  console.log(category);

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);
  // const bodyPart ='back';
  // const equipment = 'barbell';
  const target = 'abs';

  // const muscles = 'abs';

  // const bodyPart = 'back';

  const [fetchAllExercises, { data }] = useLazyFetchAllExercisesQuery();

  const onScroll = e => {
    console.log(scroll);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchAllExercises({ target, page }).unwrap();
        // setResult(prevRes => [...prevRes, ...response]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetch();
  }, [fetchAllExercises, page, target]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return function () {
      removeEventListener('scroll', onScroll);
    };
  }, []);

  console.log(data);

  const location = useLocation();
  const pathLocation = useRef(location.state?.from ?? '/exercises');

  return (
    <>
      <StyledLink to={pathLocation.current}>
        <Svg>
          <use href={`${sprite}#icon-arrow`}></use>
        </Svg>
        <LinkText>Back</LinkText>
      </StyledLink>

      <ExerciseList>
        {result?.map(({ _id, name, bodyPart, burnedCalories, target }) => (
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
    </>
  );
}
