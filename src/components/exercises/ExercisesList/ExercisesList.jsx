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

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);
  const { subcategory } = useParams();

  const equipment = category === 'equipment' ? subcategory : '';
  const target = category === 'target' ? subcategory : '';
  const bodyPart = category === 'bodyPart' ? subcategory : '';

  const [fetchAllExercises, { data }] = useLazyFetchAllExercisesQuery();

  const onScroll = e => {
    // console.log(scroll);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchAllExercises({
          bodyPart,
          target,
          equipment,
        }).unwrap();
        setResult([...response]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetch();
  }, [page, fetchAllExercises, bodyPart, target, equipment, data]);

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
