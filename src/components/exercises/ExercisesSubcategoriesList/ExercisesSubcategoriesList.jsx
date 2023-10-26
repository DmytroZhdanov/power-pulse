import React from 'react';
import { useFetchExercisesSubcategoriesQuery } from '../../../redux/api';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { List } from './ExercisesSubcategoriesList.styled';
import { useOutletContext } from 'react-router-dom';

export function ExercisesSubcategoriesList() {
  const category = useOutletContext();

  const { data, error, isLoading } =
    useFetchExercisesSubcategoriesQuery(category);

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
