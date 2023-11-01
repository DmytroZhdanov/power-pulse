import { format } from 'date-fns';

import Icon from 'components/common/IconsComp/Icon';
import Calendar from 'components/Calendar/Calendar';
import {
  CalendarIconDiv,
  CalendarInputTextP,
  WrapperCalendarInputDiv,
} from './AddProductFromPastDaysForm.styled';

export default function AddProductFromPastDaysForm({
  selectedDate,
  setSelectedDate,
}) {
  const inputText = format(selectedDate, 'dd.MM.yyyy');

  return (
    <Calendar
      maxDate={new Date()}
      onChange={setSelectedDate}
      value={selectedDate}
    >
      <WrapperCalendarInputDiv>
        <CalendarInputTextP>{inputText}</CalendarInputTextP>

        <CalendarIconDiv>
          <Icon name="calendar" />
        </CalendarIconDiv>
      </WrapperCalendarInputDiv>
    </Calendar>
  );
}
