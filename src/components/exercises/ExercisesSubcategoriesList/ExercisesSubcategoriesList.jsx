// import ExercisesSubcategoriesItem from 'components/exercises/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

// export function ExercisesSubcategoriesList()
// import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

// import { useFetchExercisesSubcategoriesQuery } from '../../../redux/api';
// import { List } from './ExercisesSubcategoriesList.styled';

// import { useEffect } from 'react';
// export default function ExercisesSubcategoriesList({ category }) {
//   const { data, error, isLoading, isError } =
//     useFetchExercisesSubcategoriesQuery(category);
//   useEffect(() => {
//     useFetchExercisesSubcategoriesQuery(category);
//   }, [category]);
//   return (
//     <List>
//       {/* {body &&
//         body.map(bod => <ExercisesSubcategoriesItem key={bod._id} bod={bod} />)} */}
//     </List>
//   );
// }

// import React, { useEffect } from 'react';
// import { useLazyFetchExercisesSubcategoriesQuery } from '../../../redux/api';
// import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
// import { EXERCISES_CATEGORY } from '../../../utils/constants';
// import { List } from './ExercisesSubcategoriesList.styled';

// export function ExercisesSubcategoriesList() {
//   const [fetchSubcategories, { data, isFetching }] =
//     useLazyFetchExercisesSubcategoriesQuery();

//   useEffect(() => {
//     const fetch = async () => {
//       const subcategories = await fetchSubcategories(
//         EXERCISES_CATEGORY.EQUIPMENT,
//       ).unwrap();

//       try {
//         fetch();
//       } catch (error) {}
//     };
//   }, []);

//   return (
//     <List>
//       {data &&
//         data.map(item => (
//           <ExercisesSubcategoriesItem key={item._id} item={item} />
//         ))}
//     </List>
//   );
// }

import React, { useEffect } from 'react';
import { useLazyFetchExercisesSubcategoriesQuery } from '../../../redux/api';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { EXERCISES_CATEGORY } from '../../../utils/constants';
import { List } from './ExercisesSubcategoriesList.styled';
// import axios from 'axios';
export function ExercisesSubcategoriesList() {
  //   // const { data, isLoading, error } = useLazyFetchExercisesSubcategoriesQuery();

  //   const token =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzkyZjBjOWU1N2Y0MDhhMWFiOTUwMyIsImlhdCI6MTY5ODI2MDg0NCwiZXhwIjoxNjk4MzQzNjQ0fQ.9FAPLpfMao_d90o6yR8ivnSP7RMs4jbS35iXQcb3CGY';
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   axios
  //     .get(
  //       'https://power-pulse-api.onrender.com/api/training/subcategories/?filter=target',
  //       { headers },
  //     )
  //     .then(r => {
  //       console.log(r.data);
  //     })
  //     .catch(error => {});
  const [fetchSubcategories, data] = useLazyFetchExercisesSubcategoriesQuery();

  useEffect(() => {
    const fetch = async () => {
      const subcategories = await fetchSubcategories(
        EXERCISES_CATEGORY.MUSCLES,
      ).unwrap();
    };
    try {
      fetch();
    } catch (error) {}
  }, []);

  console.log(data);

  return <List>{/* Ваш код для отображения данных */}</List>;
}
