import TitlePage from 'components/common/TitlePage/TitlePage';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { EXERCISES_CATEGORY } from '../../utils/constants';
import ExercisesCategories from 'components/exercises/ExercisesCategories/ExercisesCategories';

import { Content, WrapperTitleCategoriesDiv } from './Exercises.styled';

export function Exercises() {
  const [category, setCategory] = useState(EXERCISES_CATEGORY.BODY_PARTS);
  const location = useLocation();
  const { subcategory } = useParams();

  const subcategoriesLocation = location.pathname === '/exercises';
  return (
    <Content>
      <WrapperTitleCategoriesDiv margin={Boolean(subcategory)}>
        <TitlePage
          text={subcategoriesLocation ? 'Exercises' : (subcategory)}
        />
        <ExercisesCategories setCategory={setCategory} category={category} />
      </WrapperTitleCategoriesDiv>

      <Outlet context={category} />
    </Content>
  );
}
