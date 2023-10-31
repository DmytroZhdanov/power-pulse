import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import TitlePage from 'components/common/TitlePage/TitlePage';
import ExercisesCategories from 'components/exercises/ExercisesCategories/ExercisesCategories';
import { ContentDiv, WrapperTitleCategoriesDiv } from './Exercises.styled';

import { EXERCISES_CATEGORY } from 'src/utils/constants';

export function Exercises() {
  const [category, setCategory] = useState(EXERCISES_CATEGORY.BODY_PARTS);
  const location = useLocation();
  const { subcategory } = useParams();

  const subcategoriesLocation =
    location.pathname === '/exercises' || location.pathname === '/exercises/';

  return (
    <ContentDiv>
      <WrapperTitleCategoriesDiv margin={Boolean(subcategory)}>
        <TitlePage text={subcategoriesLocation ? 'Exercises' : subcategory} />

        <ExercisesCategories setCategory={setCategory} category={category} />
      </WrapperTitleCategoriesDiv>

      <Outlet context={category} />
    </ContentDiv>
  );
}
