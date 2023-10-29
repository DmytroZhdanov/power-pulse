import ExercisesItem from '../ExercisesItem/ExercisesItem';
import {
  Background,
  Content,
  ExerciseList,
  LinkText,
  StyledLink,
  Svg,
  Wrap,
} from './ExercisesList.styled';
import { useLocation, useOutletContext, useParams } from 'react-router';
import {
  useLazyFetchAllExercisesQuery,
  useFetchExercisesSubcategoriesQuery,
} from '../../../redux/api';
import { useEffect, useRef, useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { useInView } from 'react-intersection-observer';
import Loader from 'components/Loader/Loader';
export function ExercisesList() {
  const category = useOutletContext();
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);
  const { subcategory } = useParams();
  const { ref } = useInView({
    onChange: inView => inView && setFetching(true),
  });

  // const equipment = category === 'equipment' ? subcategory : '';
  // const target = category === 'target' ? subcategory : '';
  // const bodyPart = category === 'bodyPart' ? subcategory : '';

  const location = useLocation();
  const pathLocation = useRef(location.state?.from ?? '/exercises');
  const [fetchAllExercises] = useLazyFetchAllExercisesQuery();
  const listRef = useRef();

  const { data } = useFetchExercisesSubcategoriesQuery(category);

  const currentBackgroundImage = data?.filter(
    item => item.name === subcategory,
  )[0].imgURL;

  useEffect(() => {
    if (fetching) {
      setLoading(true);
      const fetch = async () => {
        try {
          const response = await fetchAllExercises({
            // bodyPart,
            // target,
            // equipment,
            page,
            [category]: subcategory,
          }).unwrap();

          setResult(prev => [...prev, ...response]);
          setPage(page + 1);
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
  }, [page, fetchAllExercises, fetching, category, subcategory]);

  return (
    <Content>
      {loading && <Loader />}
      <StyledLink to={pathLocation.current}>
        <Svg>
          <use href={`${sprite}#icon-arrow`}></use>
        </Svg>
        <LinkText>Back</LinkText>
      </StyledLink>

      <ExerciseList ref={listRef}>
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
            <Wrap key={index} ref={index === result.length - 1 ? ref : null}>
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
            </Wrap>
          ),
        )}
      </ExerciseList>
      <Background category={category} img={currentBackgroundImage} />
    </Content>
  );
}
