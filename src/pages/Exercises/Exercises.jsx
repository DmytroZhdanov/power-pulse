import TitlePage from 'components/common/TitlePage/TitlePage';
import ExercisesCategories from 'components/exercises/ExercisesCategories/ExercisesCategories';
// import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import categories from '../../../exercises_json/exercises.json'; //*
import dataj from '../../../exercises_json/data.json';
import ExercisesSubcategoriesList from '../../components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { Wrapper, List } from './Exercises.styled';

export default function Exercises() {
  const [categoriesJ, setcategoriesJ] = useState(categories); //*
  const [data, setData] = useState(dataj);
  // console.log(data);
  const [body, setBody] = useState(data.bodyPart);
  // console.log(body);
  const [muscles, setMuscles] = useState(data.muscles);
  // console.log(muscles);
  const [equipment, setEquipment] = useState(data.equipment);
  // console.log(equipment);

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
