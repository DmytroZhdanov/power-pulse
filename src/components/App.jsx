import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from 'pages/Main/Main';
import Error from 'pages/Error/Error';
// import { Welcome } from 'pages/Welcome/Welcome';
// import { SignUp } from 'pages/SignUp/SignUp';
// import { SignIn } from 'pages/SignIn/SignIn';
// import { Profile } from 'pages/Profile/Profile';
// import { Diary } from 'pages/Diary/Diary';
// import { Products } from 'pages/Products/Products';
// import { Exercises } from 'pages/Exercises/Exercises';
// import { ExercisesSubcategoriesList } from 'components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
// import { ExercisesList } from 'components/exercises/ExercisesList/ExercisesList';
// import { Data } from 'pages/Data/Data';
// import FirstStep from './data/FirstStep/FirstStep';
// import SecondStep from './data/SecondStep/SecondStep';
// import ThirdStep from './data/ThirdStep/ThirdStep';

import { ROUTER } from 'src/utils';
// import { DATA_STEPS } from '../utils/constants';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const router = createBrowserRouter(
  [
    {
      path: ROUTER.MAIN,
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          async lazy() {
            let { Welcome } = await import('pages/Welcome/Welcome');
            return {
              Component: () => (
                <RestrictedRoute
                  redirectTo={ROUTER.DIARY}
                  component={<Welcome />}
                />
              ),
            };
          },
          // element: <Welcome />,
        },
        {
          path: ROUTER.SIGN_UP,
          async lazy() {
            let { SignUp } = await import('pages/SignUp/SignUp');
            return {
              Component: () => (
                <RestrictedRoute
                  redirectTo={ROUTER.DIARY}
                  component={<SignUp />}
                />
              ),
            };
          },
          // element: <SignUp />,
        },
        // {
        //   path: ROUTER.DATA,
        //   // async lazy() {
        //   //   let { Data } = await import('pages/Data/Data');
        //   //   return {
        //   //     Component: () => <RestrictedRoute component={<Data />} />,
        //   //   };
        //   // },
        //   element: <Data />,
        //   children: [
        //     {
        //       path: DATA_STEPS.FIRST,
        //       // async lazy() {
        //       //   let { FirstStep } = await import('./data/FirstStep/FirstStep');
        //       //   return {
        //       //     Component: () => <RestrictedRoute component={<FirstStep />} />,
        //       //   };
        //       // },
        //       element: <FirstStep />,
        //     },
        //     {
        //       path: DATA_STEPS.SECOND,
        //       // async lazy() {
        //       //   let { SecondStep } = await import('./data/SecondStep/SecondStep');
        //       //   return {
        //       //     Component: () => <RestrictedRoute component={<SecondStep />} />,
        //       //   };
        //       // },
        //       element: <SecondStep />,
        //     },
        //     {
        //       path: DATA_STEPS.THIRD,
        //       // async lazy() {
        //       //   let { ThirdStep } = await import('./data/ThirdStep/ThirdStep');
        //       //   return {
        //       //     Component: () => <RestrictedRoute component={<ThirdStep />} />,
        //       //   };
        //       // },
        //       element: <ThirdStep />,
        //     },
        //   ],
        // },
        {
          path: ROUTER.SIGN_IN,
          async lazy() {
            let { SignIn } = await import('pages/SignIn/SignIn');
            return {
              Component: () => (
                <RestrictedRoute
                  redirectTo={ROUTER.DIARY}
                  component={<SignIn />}
                />
              ),
            };
          },
          // element: <SignIn />,
        },
        {
          path: ROUTER.PROFILE,
          async lazy() {
            let { Profile } = await import('pages/Profile/Profile');
            return {
              Component: () => (
                <PrivateRoute
                  redirectTo={ROUTER.SIGN_IN}
                  component={<Profile />}
                />
              ),
            };
          },
          // element: <Profile />,
        },
        {
          path: ROUTER.DIARY,
          async lazy() {
            let { Diary } = await import('pages/Diary/Diary');
            return {
              Component: () => (
                <PrivateRoute
                  redirectTo={ROUTER.SIGN_IN}
                  component={<Diary />}
                />
              ),
            };
          },
          // element: <Diary />,
        },
        {
          path: ROUTER.PRODUCTS,
          async lazy() {
            let { Products } = await import('pages/Products/Products');
            return {
              Component: () => (
                <PrivateRoute
                  redirectTo={ROUTER.SIGN_IN}
                  component={<Products />}
                />
              ),
            };
          },
          // element: <Products />,
        },
        {
          path: ROUTER.EXERCISES,
          async lazy() {
            let { Exercises } = await import('pages/Exercises/Exercises');
            return {
              Component: () => (
                <PrivateRoute
                  redirectTo={ROUTER.SIGN_IN}
                  component={<Exercises />}
                />
              ),
            };
          },
          // element: <Exercises />,
          children: [
            {
              index: true,
              async lazy() {
                let { ExercisesSubcategoriesList } = await import(
                  'components/exercises/ExercisesSubcategoriesList/ExercisesSubcategoriesList'
                );
                return {
                  Component: () => (
                    <PrivateRoute
                      redirectTo={ROUTER.SIGN_IN}
                      component={<ExercisesSubcategoriesList />}
                    />
                  ),
                };
              },
              // element: <ExercisesSubcategoriesList />,
            },
            {
              path: ROUTER.SUBCATEGORY,
              async lazy() {
                let { ExercisesList } = await import(
                  'components/exercises/ExercisesList/ExercisesList'
                );
                return {
                  Component: () => (
                    <PrivateRoute
                      redirectTo={ROUTER.SIGN_IN}
                      component={<ExercisesList />}
                    />
                  ),
                };
              },
              // element: <ExercisesList />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/power-pulse/',
  },
);

export default function App() {
  return <RouterProvider router={router} />;
}
