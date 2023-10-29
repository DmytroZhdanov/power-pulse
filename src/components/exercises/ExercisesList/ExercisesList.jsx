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
  const [pagination, setPagination] = useState(true);

  const [result, setResult] = useState([]);
  const { subcategory } = useParams();
  const { ref } = useInView({
    onChange: inView => inView && setPagination(true),
  });

  const location = useLocation();
  const pathLocation = useRef(location.state?.from ?? '/exercises');
  const [fetchAllExercises] = useLazyFetchAllExercisesQuery();
  const listRef = useRef();

  const { data, isFetching, isError, error } =
    useFetchExercisesSubcategoriesQuery(category);

  const currentBackgroundImage = data?.filter(
    item => item.name === subcategory,
  )[0].imgURL;

  useEffect(() => {
    if (pagination) {
      const fetch = async () => {
        try {
          const response = await fetchAllExercises({
            page,
            [category]: subcategory,
          }).unwrap();

          setResult(prev => [...prev, ...response]);
          setPage(page + 1);
        } catch (error) {
          console.log(error);
        } finally {
          setPagination(false);
        }
      };

      fetch();
    }
  }, [page, fetchAllExercises, isFetching, category, subcategory, pagination]);

  return (
    <Content>
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
