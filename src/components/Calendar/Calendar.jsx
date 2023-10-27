import CalendarDatePicker from 'react-calendar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { DatePickerWrapper, TransitionDatePicker } from './Calendar.styled';
import Icon from 'components/common/IconsComp/Icon';

const Calendar = ({ children, onChange, value, ...datePickerProps }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [positionCalendar, setPositionCalendar] = useState('bottom');
  const dateTextWrapperRef = useRef(null);
  const dateCalendarRef = useRef(null);
  const transitionCalendarRef = useRef(null);

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

  const setCustomBtnClassName = ({ activeStartDate, date, view }) => {
    if (view === 'month' && activeStartDate.getMonth() === date.getMonth()) {
      return 'active-month';
    } else {
      return 'outside-month';
    }
  };

  const setIsDisabledBtn = ({ activeStartDate, date, view }) =>
    view === 'month' && activeStartDate.getMonth() !== date.getMonth();

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        dateTextWrapperRef.current &&
        !dateTextWrapperRef.current.contains(e.target) &&
        dateCalendarRef.current &&
        !dateCalendarRef.current.contains(e.target)
      ) {
        if (
          e.target.nodeName === 'ABBR' ||
          e.target.classList.contains('react-calendar__tile')
        ) {
          setShowCalendar(true);
        } else {
          setShowCalendar(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
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
    </>
  );
};
export default Calendar;

Calendar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,

  datePickerProps: PropTypes.shape({
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
  }),
};
