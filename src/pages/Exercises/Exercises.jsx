import TitlePage from 'components/common/TitlePage/TitlePage';
import ExercisesCategories from 'components/exercises/ExercisesCategories/ExercisesCategories';
// import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import categories from '../../../exercises_json/exercises.json'; //*
import dataj from '../../../exercises_json/data.json';
import ExercisesSubcategoriesList from '../../components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { Wrapper, List } from './Exercises.styled';

export function Exercises() {
  return (
    <>
      <Wrapper>
        <TitlePage text={'Exercises'} />
        <List>
          {categoriesJ.map(({ _id, title }) => (
            <ExercisesCategories
              key={_id}
              title={title}
              exercisesList={dataj}
            />
          ))}
        </List>
      </Wrapper>
      <ExercisesSubcategoriesList body={body} />
      {/* <Outlet />  */}
    </>
  );
}
