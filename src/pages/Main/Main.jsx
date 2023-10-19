import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import Header from 'components/main/Header/Header';
import StatisticsInfo from 'components/main/StatisticsInfo/StatisticsInfo';

export default function Main() {
  return (
    <>
      <div>Main page</div>
      <Header />
      <StatisticsInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
