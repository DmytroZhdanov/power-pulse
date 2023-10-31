import { format } from 'date-fns';
import PropTypes from 'prop-types';
import Icon from 'src/components/common/IconsComp/Icon';
import Calendar from '../../Calendar/Calendar';

import {
  CalendarIcon,
  DefaultInputText,
  InputHidden,
  WrapperCalendarInput,
} from './DataBirthdayInput.style';

export default function BirthdayInput({ selectedDate, setSelectedDate,setIsDateSelected,isDateSelected }) {
  const defaultInputValue = 'Birthday';

  const setDate = date => {
    setIsDateSelected(true);
    setSelectedDate(date);
  };

  const today = new Date();

  const eighteenYearsAgo = new Date(
    today.setFullYear(today.getFullYear() - 18),
  );

  const maximumAge = new Date(today.setFullYear(today.getFullYear() - 100));

  const inputValue = isDateSelected
  ? format(selectedDate, 'yyyy-MM-dd')
    : defaultInputValue
  const inputText = isDateSelected
  ? format(selectedDate, 'dd.MM.yyyy')
    : defaultInputValue

  return (
    <>
      <InputHidden
        disabled
        type="date"
        name="birthday"
        defaultValue={inputValue}
      />
      <Calendar
        maxDate={eighteenYearsAgo}
        minDate={maximumAge}
        onChange={setDate}
        value={selectedDate}
      >
        <WrapperCalendarInput>
          <DefaultInputText setColor={isDateSelected ? 'full' : ''}>
            {inputText}
          </DefaultInputText>
          <CalendarIcon setColor={isDateSelected ? 'full' : ''}>
            <Icon name="calendar" />
          </CalendarIcon>
        </WrapperCalendarInput>
      </Calendar>
    </>
  );
}

BirthdayInput.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
