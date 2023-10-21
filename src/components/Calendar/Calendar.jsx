import PropTypes from 'prop-types';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { enUS } from 'date-fns/locale';

import sprite from 'src/assets/images/sprite/sprite.svg';

import {
  CalendarWrapper,
  DateTextWrapper,
  DayPickerWrapper,
} from './Calendar.styled';
import { customDayPickerStyles } from './customDayPickerStyles';

export default function Calendar({ inputText, ...dayPickerProps }) {
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
    <CalendarWrapper>
      <DateTextWrapper onClick={handleClick}>
        <p className="calendar-input-text">{inputText}</p>
        <div>
          <svg className="calendar-svg">
            <use href={sprite + '#calendar'}></use>
          </svg>
        </div>
      </DateTextWrapper>
      {showCalendar && (
        <DayPickerWrapper positionCalendar={positionCalendar}>
          <DayPicker
            mode="single"
            locale={enUS}
            weekStartsOn={1}
            showOutsideDays
            classNames={customDayPickerStyles}
            {...dayPickerProps}
          />
        </DayPickerWrapper>
      )}
    </CalendarWrapper>
  );
}

Calendar.propTypes = {
  inputText: PropTypes.string.isRequired,
  dayPickerProps: PropTypes.shape({
    selected: PropTypes.instanceOf(Date).isRequired,
    onSelect: PropTypes.func.isRequired,
    fromDate: PropTypes.instanceOf(Date),
    toDate: PropTypes.instanceOf(Date),
    captionLayout: PropTypes.string,
  }),
};
