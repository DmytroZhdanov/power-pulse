import TitlePage from 'components/common/TitlePage/TitlePage';
import { EXERCISES_CATEGORY } from '../../utils/constants';
import ExercisesCategories from 'components/exercises/ExercisesCategories/ExercisesCategories';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ExercisesSubcategoriesList } from '../../components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { Wrapper } from './Exercises.styled';
import UpperCase from '../../components/common/UpperCaseFunc/UpperCase';

export function Exercises() {
  const [category, setCategory] = useState(EXERCISES_CATEGORY.BODY_PARTS);
  const location = useLocation();
  const { subcategory } = useParams();
  const exercisesRoute = location.pathname === '/exercises';

  return (
    <>
      <Wrapper>
        <TitlePage text={'Exercises'} />

        <ExercisesCategories setCategory={setCategory} category={category} />
      </Wrapper>

      <Outlet context={category} />
    </>
  );
}
