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

export function ExercisesList() {
  const category = useOutletContext();

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);
  const { subcategory } = useParams();
  // const list = useRef();
  // const node = list.current;

  const equipment = category === 'equipment' ? subcategory : '';
  const target = category === 'target' ? subcategory : '';
  const bodyPart = category === 'bodyPart' ? subcategory : '';
  const location = useLocation();
  const pathLocation = useRef(location.state?.from ?? '/exercises');
  const [fetchAllExercises] = useLazyFetchAllExercisesQuery();
  const listRef = useRef();

  useEffect(() => {
    const listElement = listRef.current;

    const handleScroll = () => {
      if (
        listElement.scrollHeight -
          (listElement.scrollTop + listElement.clientHeight) <
        100
      ) {
        setFetching(true);
      }
    };

    listElement.addEventListener('scroll', handleScroll);

    return () => {
      listElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      const fetch = async () => {
        try {
          const response = await fetchAllExercises({
            bodyPart,
            target,
            equipment,
            page,
          }).unwrap();

          page === 1
            ? setResult(response)
            : setResult(prev => [...prev, ...response]);

          setPage(prevPage => prevPage + 1);
          setFetching(false);

          setLoading(false);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetch();
    }
  }, [page, fetchAllExercises, bodyPart, target, equipment, fetching]);

  return (
    <>
      <StyledLink to={pathLocation.current}>
        <Svg>
          <use href={`${sprite}#icon-arrow`}></use>
        </Svg>
        <LinkText>Back</LinkText>
      </StyledLink>

      <ExerciseList ref={listRef}>
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
    </>
  );
}
