import PropTypes from 'prop-types';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { enUS } from 'date-fns/locale';

import {
  CalendarWrapper,
  DateTextWrapper,
  DayPickerWrapper,
} from './Calendar.styled';
import { customDayPickerStyles } from './customDayPickerStyles';

export default function Calendar({
  inputText,
  selectedDate,
  setSelectedDate,
  dateOfUserRegistration,
  width,
  height,
  stroke,
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [positionCalendar, setPositionCalendar] = useState('bottom');

  const handleClick = e => {
    const windowHeight = window.innerHeight;
    const distanceToBottom =
      windowHeight - e.target.getBoundingClientRect().bottom;

    if (distanceToBottom < 250) {
      setPositionCalendar('bottom');
    } else {
      setPositionCalendar('top');
    }

    setShowCalendar(prev => !prev);
  };
  return (
    <>
      <CalendarWrapper>
        <DateTextWrapper onClick={handleClick}>
          <p>{inputText}</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width={width}
              height={height}
            >
              <path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 2v4M8 2v4M3 10h18"
              />
            </svg>
          </div>
        </DateTextWrapper>
        {showCalendar && (
          <DayPickerWrapper positionCalendar={positionCalendar}>
            <DayPicker
              // captionLayout="dropdown-buttons"
              // fromYear={2015}
              // toYear={2025}
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              showOutsideDays
              locale={enUS}
              classNames={customDayPickerStyles}
              fromDate={dateOfUserRegistration}
              weekStartsOn={1}
            />
          </DayPickerWrapper>
        )}
      </CalendarWrapper>
    </>
  );
}

Calendar.propTypes = {
  inputText: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  dateOfUserRegistration: PropTypes.instanceOf(Date).isRequired,
};
