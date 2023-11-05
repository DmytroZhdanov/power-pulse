import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TitlePage from 'components/common/TitlePage/TitlePage';
import DayDashboard from 'components/diary/DayDashboard/DayDashboard';
import DayExercises from 'components/diary/DayExercises/DayExercises';
import DayProducts from 'components/diary/DayProducts/DayProducts';
import DaySwitch from 'components/diary/DaySwitch/DaySwitch';
import {
  ContentWrapperDiv,
  DayStatisticWrapperDiv,
  HeaderWrapperDiv,
  Section,
} from './Diary.style';

import { useFetchDailyRateQuery, useLazyFetchDiaryQuery } from 'src/redux/api';
import { setStates } from 'src/redux/states/statesSlice';

export function Diary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaryProducts, setDiaryProducts] = useState([]);
  const [diaryExercises, setDiaryExercises] = useState([]);
  const dispatch = useDispatch();

  const [
    fetchDiary,
    { isLoading: isDiaryLoading, isError: isDiaryError, error: diaryError },
  ] = useLazyFetchDiaryQuery();

  const {
    data: bmr,
    isFetching: isDailyRateLoading,
    isError: isDailyRateError,
    error: dailyRateError,
  } = useFetchDailyRateQuery();

  const currentDay =
    selectedDate.getFullYear() +
    '-' +
    (selectedDate.getMonth() + 1) +
    '-' +
    selectedDate.getDate();

  useEffect(() => {
    dispatch(
      setStates({
        isLoading: isDiaryLoading || isDailyRateLoading,
        isError: isDiaryError || isDailyRateError,
        error: diaryError || dailyRateError,
      }),
    );
  }, [
    dailyRateError,
    diaryError,
    dispatch,
    isDailyRateError,
    isDailyRateLoading,
    isDiaryError,
    isDiaryLoading,
  ]);

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
      <HeaderWrapperDiv>
        <TitlePage text="Diary" />

        <DaySwitch
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </HeaderWrapperDiv>

      <ContentWrapperDiv>
        <DayDashboard
          bmrData={bmr}
          diaryProducts={diaryProducts}
          diaryExercises={diaryExercises}
        />
        <DayStatisticWrapperDiv>
          <DayProducts
            isLoading={isDiaryLoading}
            setDiaryProducts={setDiaryProducts}
            diaryProducts={diaryProducts}
          />

          <DayExercises
            isLoading={isDiaryLoading}
            diaryExercises={diaryExercises}
            setDiaryExercises={setDiaryExercises}
          />
        </DayStatisticWrapperDiv>
      </ContentWrapperDiv>
    </Section>
  );
}
