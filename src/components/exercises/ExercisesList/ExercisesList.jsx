import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useOutletContext, useParams } from 'react-router';
import { useInView } from 'react-intersection-observer';

import ExercisesItem from 'components/exercises/ExercisesItem/ExercisesItem';
import {
  BackgroundDiv,
  ExerciseListUl,
  LinkTextP,
  StyledLink,
  Svg,
} from './ExercisesList.styled';

import {
  useLazyFetchAllExercisesQuery,
  useFetchExercisesSubcategoriesQuery,
} from 'src/redux/api';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { setStates } from 'src/redux/states/statesSlice';

export function ExercisesList() {
  const category = useOutletContext();
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [result, setResult] = useState([]);
  const { subcategory } = useParams();
  const { ref } = useInView({
    onChange: inView => inView && setFetching(true),
  });

  const location = useLocation();
  const pathLocation = useRef(location.state?.from ?? '/exercises');
  const listRef = useRef();

  const [
    fetchAllExercises,
    { isLoading: isGettingLazy, isError: gettingErrorLazy, error: myErrorLazy },
  ] = useLazyFetchAllExercisesQuery();

  const { data, isFetching, isError, error } =
    useFetchExercisesSubcategoriesQuery(category);

  const dispatch = useDispatch();

  const currentBackgroundImage =
    data && data.filter(item => item.name === subcategory)[0];
  const backgroundImage = currentBackgroundImage
    ? currentBackgroundImage.imgURL
    : null;

  useEffect(() => {
    dispatch(
      setStates({
        isLoading: isGettingLazy || isFetching,
        isError: gettingErrorLazy || isError,
        error: myErrorLazy || error,
      }),
    );
  }, [
    isGettingLazy,
    dispatch,
    isFetching,
    gettingErrorLazy,
    isError,
    myErrorLazy,
    error,
  ]);

  useEffect(() => {
    if (fetching) {
      const fetch = async () => {
        try {
          const response = await fetchAllExercises({
            page,
            [category]: subcategory,
          }).unwrap();

          if (response.data.length === 0) {
            return;
          }

          page === 1
            ? setResult([...response.data])
            : setResult(prev => [...prev, ...response.data]);

          setFetching(false);
          setPage(page + 1);
        } catch (error) {
          console.log(error);
        }
      };

      fetch();
    }
  }, [page, fetchAllExercises, fetching, category, subcategory]);

  return (
    <div>
      <StyledLink to={pathLocation.current}>
        <Svg>
          <use href={`${sprite}#icon-arrow`}></use>
        </Svg>

        <LinkTextP>Back</LinkTextP>
      </StyledLink>

      <ExerciseListUl ref={listRef}>
        {result?.map(
          (
            {
              _id,
              name,
              bodyPart,
              burnedCalories,
              target,
              gifUrl,
              time,
              equipment,
            },
            index,
          ) => (
            <li key={index} ref={index === result.length - 1 ? ref : null}>
              <ExercisesItem
                key={_id}
                _id={_id}
                bodyPart={bodyPart}
                equipment={equipment}
                gifUrl={gifUrl}
                name={name}
                target={target}
                burnedCalories={burnedCalories}
                time={time}
              />
            </li>
          ),
        )}
      </ExerciseListUl>

      <BackgroundDiv category={category} img={backgroundImage} />
    </div>
  );
}
