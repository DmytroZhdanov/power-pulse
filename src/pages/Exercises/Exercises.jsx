import TitlePage from 'components/common/TitlePage/TitlePage';
import { EXERCISES_CATEGORY } from '../../utils/constants';
import ExercisesCategories from 'components/exercises/ExercisesCategories/ExercisesCategories';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ExercisesSubcategoriesList } from '../../components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { Wrapper } from './Exercises.styled';

export function Exercises() {
  const [category, setCategory] = useState(EXERCISES_CATEGORY.BODY_PARTS);

  return (
    <>
      <Wrapper>
        <TitlePage text={'Exercises'} />

        <ExercisesCategories setCategory={setCategory} category={category} />
      </Wrapper>
      <ExercisesSubcategoriesList />
      <Outlet category={category} />
    </>
  );
}
