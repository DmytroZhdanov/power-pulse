import TitlePage from 'components/common/TitlePage/TitlePage';
import ExercisesCategories from 'components/exercises/ExercisesCategories/ExercisesCategories';
import { Outlet } from 'react-router-dom';

export default function Exercises() {
  return (
    <>
      <div>Exercises page</div>
      <TitlePage />
      <ExercisesCategories />
      <Outlet />
    </>
  );
}
