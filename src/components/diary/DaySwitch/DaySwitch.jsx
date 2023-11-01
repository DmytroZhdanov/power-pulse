import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLazyFetchDiaryAllQuery } from 'src/redux/api';
import { selectUserRegistrationDate } from 'src/redux/auth/selectors';

import Calendar from 'components/Calendar/Calendar';
import Icon from 'components/common/IconsComp/Icon';

import { generateDateRange } from 'src/utils';

import {
  Button,
  CalendarIcon,
  CalendarWrapper,
  InputText,
  InputWrapper,
  Wrapper,
} from './DaySwitch.style';

export default function DaySwitch({ selectedDate, setSelectedDate }) {
  const [sortDates, setSortDates] = useState([]);
  const [indexDate, setIndexDate] = useState(null);

  const dateOfUserRegistration = useSelector(selectUserRegistrationDate);

  const [fetchDiaryAll, { data, error }] = useLazyFetchDiaryAllQuery();

  useEffect(() => {
    if (data && data.length !== 0) {
      const allDates = [
        ...new Set([
          ...data,
          ...generateDateRange(dateOfUserRegistration, new Date()),
        ]),
      ];

      const sortDates = allDates.map(date => new Date(date).getTime()).sort();

      const index = sortDates.indexOf(
        new Date(selectedDate.toDateString()).getTime(),
      );

      setSortDates(sortDates);
      setIndexDate(index);
    } else {
      const allDates = generateDateRange(dateOfUserRegistration, new Date());
      const sortDates = allDates.map(date => new Date(date).getTime()).sort();

      const index = sortDates.indexOf(
        new Date(selectedDate.toDateString()).getTime(),
      );

      setSortDates(sortDates);
      setIndexDate(index);
    }
  }, [data, dateOfUserRegistration, selectedDate]);

  useEffect(() => {
    if (error) {
      return;
    }
    const getAllDates = async () => {
      await fetchDiaryAll();
    };
    getAllDates();
  }, [error, fetchDiaryAll]);

  const setActiveDate = ({ date, view }) => {
    const isSkip =
      date.getTime() > new Date(dateOfUserRegistration).getTime() ||
      date.toDateString() === new Date(dateOfUserRegistration).toDateString();

    if (isSkip) {
      return false;
    } else if (view !== 'month') {
      return false;
    } else {
      return !data.includes(date.toDateString());
    }
  };

  const handlePreviousClick = () => {
    const previousDate = new Date(sortDates[indexDate - 1]);
    setSelectedDate(previousDate);
  };

  const handleNextClick = () => {
    const nextDate = new Date(sortDates[indexDate + 1]);
    setSelectedDate(nextDate);
  };

  const isDisabledNextBtn =
    selectedDate.toDateString() === new Date().toDateString();

  const isDisabledPrevBtn =
    selectedDate.toDateString() === new Date(sortDates[0]).toDateString();

  const param = error
    ? {
        minDate: new Date(dateOfUserRegistration),
      }
    : {
        minDate:
          data && data.length !== 0
            ? new Date(sortDates[0])
            : new Date(dateOfUserRegistration),
        tileDisabled: setActiveDate,
      };

  return (
    <Wrapper>
      <CalendarWrapper>
        <Calendar
          {...param}
          onChange={setSelectedDate}
          value={selectedDate}
          maxDate={new Date()}
        >
          <InputWrapper>
            <InputText> {format(selectedDate, 'dd/MM/yyyy')}</InputText>
            <CalendarIcon>
              <Icon name="calendar" />
            </CalendarIcon>
          </InputWrapper>
        </Calendar>
      </CalendarWrapper>
      <div>
        <Button aria-label="PrevDate" disabled={isDisabledPrevBtn} onClick={handlePreviousClick}>
          <Icon name="nav-arrow-left" />
        </Button>
        <Button aria-label="NextDate" disabled={isDisabledNextBtn} onClick={handleNextClick}>
          <Icon name="nav-arrow-right" />
        </Button>
      </div>
    </Wrapper>
  );
}

DaySwitch.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
