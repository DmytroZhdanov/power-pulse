// import { useFetchExercisesSubcategoriesQuery } from '../../../redux/api';
// import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
// import { EXERCISES_CATEGORY } from '../../../utils/constants';
// import { List } from './ExercisesSubcategoriesList.styled';
// import { useEffect } from 'react';

// export function ExercisesSubcategoriesList({ category }) {
//   const categoryType = determineCategoryType(category);
//   function determineCategoryType(category) {
//     switch (category) {
//       case 'muscles':
//         return EXERCISES_CATEGORY.MUSCLES;
//       case 'equipment':
//         return EXERCISES_CATEGORY.EQUIPMENT;

//       default:
//         return EXERCISES_CATEGORY.BODY_PARTS;
//     }
//   }

//   const data = useFetchExercisesSubcategoriesQuery(categoryType);
//   console.log(data);

//   <List>
//     {data.data.map(item => (
//       <ExercisesSubcategoriesItem key={item.id} it={item} />
//     ))}
//   </List>;
// }

import React from 'react'; // Добавьте импорт React
import { useFetchExercisesSubcategoriesQuery } from '../../../redux/api';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { EXERCISES_CATEGORY } from '../../../utils/constants';
import { List } from './ExercisesSubcategoriesList.styled';
import { useEffect } from 'react';

export function ExercisesSubcategoriesList({ category }) {
  const categoryType = determineCategoryType(category);

  function determineCategoryType(category) {
    switch (category) {
      case 'muscles':
        return EXERCISES_CATEGORY.MUSCLES;
      case 'equipment':
        return EXERCISES_CATEGORY.EQUIPMENT;
      default:
        return EXERCISES_CATEGORY.BODY_PARTS;
    }
  }

  const { data, error, isLoading } =
    useFetchExercisesSubcategoriesQuery(categoryType);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <List>
      {data &&
        data.map(item => (
          <ExercisesSubcategoriesItem key={item._id} it={item} />
        ))}
    </List>
  );
}
