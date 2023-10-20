import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from 'pages/Main/Main';
import Error from 'pages/Error/Error';
import Welcome from 'pages/Welcome/Welcome';
import SignUp from 'pages/SignUp/SignUp';
import SignIn from 'pages/SignIn/SignIn';
import Profile from 'pages/Profile/Profile';
import Diary from 'pages/Diary/Diary';
import { Products } from 'pages/Products/Products';
import Exercises from 'pages/Exercises/Exercises';
import Data from 'pages/Data/Data';
import ExercisesSubcategoriesList from 'components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesList from 'components/exercises/ExercisesList/ExercisesList';

import { ROUTER } from 'src/utils';

const router = createBrowserRouter([
  {
    path: ROUTER.MAIN,
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: ROUTER.WELCOME,
        element: <Welcome />,
      },
      {
        path: ROUTER.SIGN_UP,
        element: <SignUp />,
      },
      {
        path: ROUTER.DATA,
        element: <Data />,
      },
      {
        path: ROUTER.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: ROUTER.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTER.DIARY,
        element: <Diary />,
      },
      {
        path: ROUTER.PRODUCTS,
        element: <Products />,
      },
      {
        path: ROUTER.EXERCISES,
        element: <Exercises />,
        children: [
          {
            index: true,
            element: <ExercisesSubcategoriesList />,
          },
          {
            path: ROUTER.SUBCATEGORY,
            element: <ExercisesList />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
