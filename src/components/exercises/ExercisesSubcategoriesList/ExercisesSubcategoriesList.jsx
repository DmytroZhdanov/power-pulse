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

import React, { useEffect } from 'react';
import { useLazyFetchExercisesSubcategoriesQuery } from '../../../redux/api';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { EXERCISES_CATEGORY } from '../../../utils/constants';
import { List } from './ExercisesSubcategoriesList.styled';

export default function ExercisesSubcategoriesList({ category }) {
  const [fetchSubcategories, { data }] =
    useLazyFetchExercisesSubcategoriesQuery();
  useEffect(() => {
    const fetch = async () => {
      const subcategories = await fetchSubcategories(
        EXERCISES_CATEGORY.BODY_PARTS,
      ).unwrap();
    };
  }, [category]);
  return (
    <List>
      {data &&
        data.map(item => (
          <ExercisesSubcategoriesItem key={item._id} item={item} />
        ))}
    </List>
  );
}
