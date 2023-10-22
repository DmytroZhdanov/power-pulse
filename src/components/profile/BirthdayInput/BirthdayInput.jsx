import { format } from 'date-fns';
// import { useState } from 'react';
import PropTypes from 'prop-types';

import Calendar from '../../Calendar/Calendar';
import { WrapperCalendarInput } from './BirthdayInput.style';

export default function BirthdayInput({ selectedDate, setSelectedDate }) {
  const defaultInputValue = 'Birthday';

  const today = new Date();
  const eighteenYearsAgo = new Date(today).setFullYear(
    today.getFullYear() - 18,
  );
  const maximumAge = new Date(today).setFullYear(today.getFullYear() - 100);

  const inputText = selectedDate
    ? format(selectedDate, 'dd/MM/yyyy')
    : defaultInputValue;

  return (
    <WrapperCalendarInput>
      <Calendar
        inputText={inputText}
        selected={selectedDate}
        onSelect={setSelectedDate}
        toDate={eighteenYearsAgo}
        fromDate={maximumAge}
        captionLayout="dropdown-buttons"
      />
    </WrapperCalendarInput>
  );
}

BirthdayInput.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};