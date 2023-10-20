import TitlePage from 'components/common/TitlePage/TitlePage';
import DayDashboard from 'components/diary/DayDashboard/DayDashboard';
import DayExercises from 'components/diary/DayExercises/DayExercises';
import DayProducts from 'components/diary/DayProducts/DayProducts';
import DaySwitch from 'components/diary/DaySwitch/DaySwitch';
import { useState } from 'react';

export default function Diary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <div>Diary page</div>
      <TitlePage />
      <DaySwitch
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <DayProducts />
      <DayExercises />
      <DayDashboard />
    </>
  );
}
