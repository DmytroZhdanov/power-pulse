import { useState } from 'react';

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
          <DayProducts />
          <DayExercises />
        </DayStatisticWrapper>
      </ContentWrapper>
    </Section>
  );
}
2;
