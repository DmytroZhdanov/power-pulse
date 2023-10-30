import { useState, useEffect, useMemo } from 'react';

import {
  useLazyFetchDiaryQuery,
  useLazyFetchUserParamsQuery,
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

  const [fetchDiary] = useLazyFetchDiaryQuery();
  const [fetchUserParams] = useLazyFetchUserParamsQuery();
  const [userParams, setUserParams] = useState(null);
  const [exerciseResponse, setExerciseResponse] = useState([]);
  const [productResponse, setProductResponse] = useState([]);

  const currentDay =
    selectedDate.getFullYear() +
    '-' +
    (selectedDate.getMonth() + 1) +
    '-' +
    selectedDate.getDate();
  useEffect(() => {
    const fetchParams = async () => {
      const userParams = await fetchUserParams();
      setUserParams(userParams);
    };
    fetchParams();
  }, [fetchUserParams]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const diaryExerciseData = await fetchDiary(currentDay);

      setProductResponse(diaryExerciseData.data);
    };
    fetchExerciseData();
  }, [fetchDiary, currentDay, productResponse]);

  useEffect(() => {
    const fetchProductData = async () => {
      const diaryProductData = await fetchDiary(currentDay);

      setExerciseResponse(diaryProductData.data);
    };
    fetchProductData();
  }, [fetchDiary, currentDay, exerciseResponse]);

  const memoizedProductData = useMemo(() => {
    // Возвращайте данные, которые должны быть кэшированы
    return productResponse && productResponse.productResult;
  }, [productResponse]);

  const memoizedExerciseData = useMemo(() => {
    // Возвращайте данные, которые должны быть кэшированы
    return exerciseResponse && exerciseResponse.exerciseResult;
  }, [exerciseResponse]);

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
            blood={userParams && userParams.data.user.userParams.blood}
            fetchDiaryProducts={setProductResponse}
            data={memoizedProductData}
          />
          <DayExercises
            fetchDiaryExercises={setExerciseResponse}
            data={memoizedExerciseData}
          />
        </DayStatisticWrapper>
      </ContentWrapper>
    </Section>
  );
}
