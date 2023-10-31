import { useState, useEffect } from 'react';

import {
  useLazyFetchDiaryQuery,
} from '../../redux/api';
import TitlePage from 'components/common/TitlePage/TitlePage';
import DayDashboard from 'components/diary/DayDashboard/DayDashboard';
import DayExercises from 'components/diary/DayExercises/DayExercises';
import DayProducts from 'components/diary/DayProducts/DayProducts';
import DaySwitch from 'components/diary/DaySwitch/DaySwitch';

import {
  ContentWrapper,
  DayStatisticWrapper,
  HeaderWrapper,
  Section,
} from './Diary.style';

export function Diary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaryProducts, setDiaryProducts] = useState([]);
  const [diaryExercises, setDiaryExercises] = useState([]);

  const [fetchDiary, { isLoading }] = useLazyFetchDiaryQuery();

  const currentDay =
    selectedDate.getFullYear() +
    '-' +
    (selectedDate.getMonth() + 1) +
    '-' +
    selectedDate.getDate();

 

  useEffect(() => {
    const fetchDiaryData = async () => {
      const diaryData = await fetchDiary(currentDay);

      setDiaryExercises(diaryData.data.exerciseResult);
      setDiaryProducts(diaryData.data.productResult);
    };
    fetchDiaryData();
  }, [fetchDiary, currentDay]);

  return (
    <Section>
      <HeaderWrapper>
        <TitlePage text="Diary" />
        <DaySwitch
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </HeaderWrapper>
      <ContentWrapper>
        <DayDashboard />
        <DayStatisticWrapper>
          <DayProducts
            isLoading={isLoading}
            setDiaryProducts={setDiaryProducts}
            diaryProducts={diaryProducts}
          />
          <DayExercises
            isLoading={isLoading}
            diaryExercises={diaryExercises}
            setDiaryExercises={setDiaryExercises}
          />
        </DayStatisticWrapper>
      </ContentWrapper>
    </Section>
  );
}
