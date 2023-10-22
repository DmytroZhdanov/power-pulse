import PropTypes from 'prop-types';
import { DayPicker } from 'react-day-picker';
import { useEffect, useRef, useState } from 'react';
import { enUS } from 'date-fns/locale';
import { CSSTransition } from 'react-transition-group';

import { DateTextWrapper, TransitionDayPicker } from './Calendar.styled';
import { customDayPickerStyles } from './customDayPickerStyles';

import sprite from 'src/assets/images/sprite/sprite.svg';
import 'react-day-picker/dist/style.css';

export default function Calendar({ inputText, ...dayPickerProps }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [positionCalendar, setPositionCalendar] = useState('bottom');
  const dateTextWrapperRef = useRef(null);
  const dateCalendarRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        dateTextWrapperRef.current &&
        !dateTextWrapperRef.current.contains(e.target) &&
        dateCalendarRef.current &&
        !dateCalendarRef.current.contains(e.target)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <DateTextWrapper ref={dateTextWrapperRef} onClick={handleClick}>
        <p className="calendar-input-text">{inputText}</p>
        <svg className="calendar-svg">
          <use href={sprite + '#calendar'}></use>
        </svg>
      </DateTextWrapper>

      <CSSTransition
        in={showCalendar}
        nodeRef={dateCalendarRef}
        timeout={300}
        classNames="day-picker-wrapper"
        unmountOnExit
      >
        <TransitionDayPicker
          ref={dateCalendarRef}
          positionCalendar={positionCalendar}
        >
          <DayPicker
            mode="single"
            locale={enUS}
            weekStartsOn={1}
            showOutsideDays
            classNames={customDayPickerStyles}
            {...dayPickerProps}
          />
        </TransitionDayPicker>
      </CSSTransition>
    </>
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
