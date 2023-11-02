import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TitlePage from 'components/common/TitlePage/TitlePage';
import DayDashboard from 'components/diary/DayDashboard/DayDashboard';
import DayExercises from 'components/diary/DayExercises/DayExercises';
import DayProducts from 'components/diary/DayProducts/DayProducts';
import DaySwitch from 'components/diary/DaySwitch/DaySwitch';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import TimerWarning from 'components/common/TimerWarning/TimerWarning';
import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';
import {
  ContentWrapperDiv,
  DayStatisticWrapperDiv,
  HeaderWrapperDiv,
  Section,
} from './Diary.style';

import {
  useFetchDailyRateQuery,
  useFetchUserBloodGroupQuery,
  useLazyFetchDiaryQuery,
} from 'src/redux/api';
import { initialState, setCredentials } from 'src/redux/auth/authSlice';

export function Diary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diaryProducts, setDiaryProducts] = useState([]);
  const [diaryExercises, setDiaryExercises] = useState([]);
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const [
    fetchDiary,
    { isLoading: isDiaryLoading, isError: isDiaryError, error: diaryError },
  ] = useLazyFetchDiaryQuery();

  const {
    data: bmr,
    isLoading: isDailyRateLoading,
    isError: isDailyRateError,
    error: dailyRateError,
  } = useFetchDailyRateQuery();

  const {
    data: userBloodGroup,
    isLoading: isUserBloodLoading,
    isError: isUserBloodError,
    error: userBloodError,
  } = useFetchUserBloodGroupQuery();

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

  useEffect(() => {
    let id;

    if (isDiaryLoading || isDailyRateLoading || isUserBloodLoading) {
      id = setTimeout(setShowTimerWarning, 3000, true);
    }

    return clearTimeout(id);
  }, [isDailyRateLoading, isDiaryLoading, isUserBloodLoading]);

  useEffect(() => {
    if (isDiaryError || isDailyRateError || isUserBloodError) {
      setShowError(true);
      setTimeout(setShowError, 2000, false);
    }
  }, [isDailyRateError, isDiaryError, isUserBloodError]);

  useEffect(() => {
    if (
      diaryError?.status === 401 ||
      dailyRateError?.status === 401 ||
      userBloodError?.status === 401
    ) {
      dispatch(setCredentials(initialState));
    }
  }, [dailyRateError, diaryError, dispatch, userBloodError]);

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
            blood={userBloodGroup}
          />

          <DayExercises
            isLoading={isDiaryLoading}
            diaryExercises={diaryExercises}
            setDiaryExercises={setDiaryExercises}
          />
        </DayStatisticWrapperDiv>
      </ContentWrapperDiv>

      <BasicModalWindow
        onShow={
          (isDiaryLoading || isDailyRateLoading || isUserBloodLoading) &&
          showTimerWarning
        }
        onClose={() => setShowTimerWarning(false)}
      >
        <TimerWarning />
      </BasicModalWindow>

      <BasicModalWindow onShow={showError} onClose={() => setShowError(false)}>
        <ErrorMessage
          message={
            diaryError?.data?.message ||
            dailyRateError?.data?.message ||
            userBloodError?.data?.message
          }
        />
      </BasicModalWindow>
    </Section>
  );
}
