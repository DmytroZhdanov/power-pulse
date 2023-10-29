import CalendarDatePicker from 'react-calendar';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { DayPicker } from 'react-day-picker';
import { useEffect, useRef, useState } from 'react';
import { enUS } from 'date-fns/locale';
import { CSSTransition } from 'react-transition-group';

import { DateTextWrapper, TransitionDayPicker } from './Calendar.styled';
import { customDayPickerStyles } from './customDayPickerStyles';

import sprite from 'src/assets/images/sprite/sprite.svg';
import 'react-day-picker/dist/style.css';

export default function Calendar({
  selected,
  onSelect,
  inputText,
  ...dayPickerProps
}) {
=======
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { DatePickerWrapper, TransitionDatePicker } from './Calendar.styled';
import Icon from 'components/common/IconsComp/Icon';

const Calendar = ({ children, onChange, value, ...datePickerProps }) => {
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  const [showCalendar, setShowCalendar] = useState(false);
  const [positionCalendar, setPositionCalendar] = useState('bottom');
  const dateTextWrapperRef = useRef(null);
  const dateCalendarRef = useRef(null);
<<<<<<< HEAD

  const onSelectDate = date => {
    if (!date) {
      return;
    }
    onSelect(date);
  };
=======
  const transitionCalendarRef = useRef(null);
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9

  const handleChangeDate = date => {
    onChange(date);
    setShowCalendar(false);
  };

  const handleClickCalendarInput = e => {
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

<<<<<<< HEAD
=======
  const setCustomBtnClassName = ({ activeStartDate, date, view }) => {
    if (view === 'month' && activeStartDate.getMonth() === date.getMonth()) {
      return 'active-month';
    } else {
      return 'outside-month';
    }
  };

  const setIsDisabledBtn = ({ activeStartDate, date, view }) =>
    view === 'month' && activeStartDate.getMonth() !== date.getMonth();

>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  useEffect(() => {
    const handleClickOutside = e => {
      if (
        dateTextWrapperRef.current &&
        !dateTextWrapperRef.current.contains(e.target) &&
        dateCalendarRef.current &&
        !dateCalendarRef.current.contains(e.target)
      ) {
<<<<<<< HEAD
        setShowCalendar(false);
=======
        if (
          e.target.nodeName === 'ABBR' ||
          e.target.classList.contains('react-calendar__tile')
        ) {
          setShowCalendar(true);
        } else {
          setShowCalendar(false);
        }
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
<<<<<<< HEAD
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
            selected={selected}
            onSelect={onSelectDate}
            {...dayPickerProps}
          />
        </TransitionDayPicker>
      </CSSTransition>
=======
      <div ref={dateTextWrapperRef} onClick={handleClickCalendarInput}>
        {children}
      </div>
      <DatePickerWrapper
        ref={dateCalendarRef}
        positionCalendar={positionCalendar}
      >
        <CSSTransition
          in={showCalendar}
          nodeRef={transitionCalendarRef}
          timeout={300}
          classNames="date-picker-wrapper"
          unmountOnExit
        >
          <TransitionDatePicker
            positionCalendar={positionCalendar}
            ref={transitionCalendarRef}
          >
            <CalendarDatePicker
              className="date-picker-calendar"
              locale={'en'}
              minDetail="decade"
              onChange={handleChangeDate}
              value={value}
              formatShortWeekday={(_, date) => format(date, 'EEEEEE')}
              formatMonth={(_, date) => format(date, 'MMM')}
              tileDisabled={setIsDisabledBtn}
              tileClassName={setCustomBtnClassName}
              prevLabel={<Icon name="nav-arrow-left" />}
              prev2Label={<Icon name="double-nav-arrow-left" />}
              nextLabel={<Icon name="nav-arrow-right" />}
              next2Label={<Icon name="double-nav-arrow-right" />}
              {...datePickerProps}
            />
          </TransitionDatePicker>
        </CSSTransition>
      </DatePickerWrapper>
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    </>
  );
};
export default Calendar;

Calendar.propTypes = {
<<<<<<< HEAD
  inputText: PropTypes.string.isRequired,
  dayPickerProps: PropTypes.shape({
    selected: PropTypes.instanceOf(Date).isRequired,
    onSelect: PropTypes.func.isRequired,
    fromDate: PropTypes.instanceOf(Date),
    toDate: PropTypes.instanceOf(Date),
    captionLayout: PropTypes.string,
=======
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,

  datePickerProps: PropTypes.shape({
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  }),
};
