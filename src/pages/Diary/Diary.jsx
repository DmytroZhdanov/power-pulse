import { useState, useEffect } from 'react';
import { useLazyFetchDiaryQuery } from '../../redux/api';
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
  const [trigger, result, lastPromiseInfo] =
    useLazyFetchDiaryQuery(selectedDate);
  const { data, isLoading, error } = result;
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
          <DayProducts data={data.productResult} />
          <DayExercises data={data.exerciseResult} />
        </DayStatisticWrapper>
      </ContentWrapper>
    </Section>
  );
}
2;
