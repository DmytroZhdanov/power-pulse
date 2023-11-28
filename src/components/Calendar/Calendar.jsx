import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import CalendarDatePicker from 'react-calendar';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Icon from 'components/common/IconsComp/Icon';
import { DatePickerWrapper, TransitionDatePicker } from './Calendar.styled';
import { useTranslation } from 'react-i18next';
import { enUS, uk } from 'date-fns/locale';

const Calendar = ({ children, onChange, value, ...datePickerProps }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [inputClientRect, setInputClientRect] = useState({});

  const { i18n } = useTranslation();
  const { language } = i18n;

  const dateTextWrapperRef = useRef(null);
  const dateCalendarRef = useRef(null);
  const transitionCalendarRef = useRef(null);

  const calendarRoot = document.querySelector('#calendar-root');

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
          setInputClientRect(
            dateTextWrapperRef.current.getBoundingClientRect(),
          );
          setShowCalendar(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChangeDate = date => {
    onChange(date);
    setInputClientRect(dateTextWrapperRef.current.getBoundingClientRect());
    setShowCalendar(false);
  };

  const handleClickCalendarInput = () => {
    setInputClientRect(dateTextWrapperRef.current.getBoundingClientRect());

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

  const formatShortWeekday = (locale, date) =>
    format(date, 'EEEEEE', {
      locale: locale === 'uk' ? uk : enUS,
    });

  const formatMonth = (locale, date) =>
    format(date, 'MMM', {
      locale: locale === 'uk' ? uk : enUS,
    });
  return (
    <>
      <div ref={dateTextWrapperRef} onClick={handleClickCalendarInput}>
        {children}
      </div>
      {createPortal(
        <DatePickerWrapper
          ref={dateCalendarRef}
          inputClientRect={inputClientRect}
        >
          <CSSTransition
            in={showCalendar}
            nodeRef={transitionCalendarRef}
            timeout={300}
            classNames="date-picker-wrapper"
            unmountOnExit
          >
            <TransitionDatePicker
              ref={transitionCalendarRef}
              inputClientRect={inputClientRect}
            >
              <CalendarDatePicker
                className="date-picker-calendar"
                locale={language}
                minDetail="decade"
                value={value}
                onChange={handleChangeDate}
                formatShortWeekday={formatShortWeekday}
                formatMonth={formatMonth}
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
        </DatePickerWrapper>,
        calendarRoot,
      )}
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
