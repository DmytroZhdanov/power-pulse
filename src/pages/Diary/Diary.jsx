import { useState, useEffect } from 'react';

import TitlePage from 'components/common/TitlePage/TitlePage';
import DayDashboard from 'components/diary/DayDashboard/DayDashboard';
import DayExercises from 'components/diary/DayExercises/DayExercises';
import DayProducts from 'components/diary/DayProducts/DayProducts';
import DaySwitch from 'components/diary/DaySwitch/DaySwitch';
import ErrorHandler from 'components/common/ErrorHandler/ErrorHandler';
import {
  ContentWrapperDiv,
  DayStatisticWrapperDiv,
  HeaderWrapperDiv,
  Section,
} from './Diary.style';

import { useFetchDailyRateQuery, useLazyFetchDiaryQuery } from 'src/redux/api';
import { useTranslation } from 'react-i18next';

export function Diary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaryProducts, setDiaryProducts] = useState([]);
  const [diaryExercises, setDiaryExercises] = useState([]);

  const { t } = useTranslation(['Diary']);

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
        <TitlePage text={t('title', { ns: 'Diary' })} />

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

      <ErrorHandler
        isLoading={isDiaryLoading}
        isError={isDiaryError}
        error={diaryError}
        showLoader={false}
      />

      <ErrorHandler
        isLoading={isDailyRateLoading}
        isError={isDailyRateError}
        error={dailyRateError}
        showLoader={false}
      />
    </Section>
  );
}
