import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import TitlePage from 'components/common/TitlePage/TitlePage';
import { EXERCISES_CATEGORY } from '../../utils/constants';
import ExercisesCategories from 'components/exercises/ExercisesCategories/ExercisesCategories';
import { WrapperTitleCategoriesDiv } from './Exercises.styled';

export function Exercises() {
  const [category, setCategory] = useState(EXERCISES_CATEGORY.BODY_PARTS);

  return (
    <>
      <WrapperTitleCategoriesDiv>
        <TitlePage text={'Exercises'} />

        <ExercisesCategories setCategory={setCategory} category={category} />
      </WrapperTitleCategoriesDiv>

      <Outlet context={category} />
    </>
  );
}
