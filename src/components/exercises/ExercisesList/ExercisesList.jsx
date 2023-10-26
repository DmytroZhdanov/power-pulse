import ExercisesItem from '../ExercisesItem/ExercisesItem';
import {
  ExerciseList,
  LinkText,
  StyledLink,
  Svg,
} from './ExercisesList.styled';
import { useLocation, useParams } from 'react-router';
import { useLazyFetchAllExercisesQuery } from '../../../redux/api';
import { useEffect, useRef, useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';

export function ExercisesList() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const equipment = 'barbell';
  // const bodyPart = 'upper legs';

  const [fetchAllExercises, { data }] = useLazyFetchAllExercisesQuery();

  useEffect(() => {
    const fetch = async () => {
      try {
        await fetchAllExercises({ page, equipment }).unwrap();
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetch();
  }, [fetchAllExercises, page, equipment]);

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
        {data?.map(({ _id, name, bodyPart, burnedCalories, target }) => (
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

// import ExercisesItem from '../ExercisesItem/ExercisesItem';
// import {
//   ExerciseList,
//   LinkText,
//   StyledLink,
//   Svg,
// } from './ExercisesList.styled';
// import { useLocation, useParams } from 'react-router';
// import { useLazyFetchAllExercisesQuery } from '../../../redux/api';
// import { useEffect, useRef, useState } from 'react';
// import sprite from 'src/assets/images/sprite/sprite.svg';

// export function ExercisesList() {
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const equipment = 'barbell';

//   const [fetchAllExercises, { data }] = useLazyFetchAllExercisesQuery();

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         // Добавьте параметр equipment к запросу
//         await fetchAllExercises({ page, equipment }).unwrap();
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     setLoading(true);
//     fetch();
//   }, [fetchAllExercises, page, equipment]);

//   console.log(data);

//   const location = useLocation();
//   const pathLocation = useRef(location.state?.from ?? '/exercises');

//   return (
//     <>
//       <StyledLink to={pathLocation.current}>
//         <Svg>
//           <use href={`${sprite}#icon-arrow`}></use>
//         </Svg>
//         <LinkText>Back</LinkText>
//       </StyledLink>

//       <ExerciseList>
//         {data?.map(({ _id, name, bodyPart, burnedCalories, target }) => (
//           <ExercisesItem
//             key={_id}
//             name={name}
//             bodyPart={bodyPart}
//             burnedCalories={burnedCalories}
//             target={target}
//           />
//         ))}
//       </ExerciseList>

//       <button
//         type="button"
//         onClick={() => {
//           setPage(page + 1);
//         }}
//       >
//         Add more
//       </button>
//     </>
//   );
// }
