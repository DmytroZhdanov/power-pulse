import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import Calendar from 'components/Calendar/Calendar';
import Icon from 'components/common/IconsComp/Icon';
import {
  Button,
  CalendarIconDiv,
  CalendarWrapperDiv,
  InputTextP,
  InputWrapperDiv,
  WrapperDiv,
} from './DaySwitch.style';

import { useLazyFetchDiaryAllQuery } from 'src/redux/api';
import { selectUserRegistrationDate } from 'src/redux/auth/selectors';
import { generateDateRange } from 'src/utils';
import { setStates } from 'src/redux/states/statesSlice';

export default function DaySwitch({ selectedDate, setSelectedDate }) {
  const [sortDates, setSortDates] = useState([]);
  const [indexDate, setIndexDate] = useState(null);

  const dispatch = useDispatch();

  const dateOfUserRegistration = useSelector(selectUserRegistrationDate);

  const [fetchDiaryAll, { data, isLoading, isError, error }] =
    useLazyFetchDiaryAllQuery();

  useEffect(() => {
    dispatch(setStates({ isLoading, isError, error }));
  }, [dispatch, error, isError, isLoading]);

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
    const getAllDates = async () => {
      await fetchDiaryAll();
    };

    if (!error) {
      getAllDates();
    }
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
    <WrapperDiv>
      <CalendarWrapperDiv>
        <Calendar
          {...param}
          onChange={setSelectedDate}
          value={selectedDate}
          maxDate={new Date()}
        >
          <InputWrapperDiv>
            <InputTextP> {format(selectedDate, 'dd/MM/yyyy')}</InputTextP>

            <CalendarIconDiv>
              <Icon name="calendar" />
            </CalendarIconDiv>
          </InputWrapperDiv>
        </Calendar>
      </CalendarWrapperDiv>

      <div>
        <Button
          aria-label="PrevDate"
          disabled={isDisabledPrevBtn}
          onClick={handlePreviousClick}
        >
          <Icon name="nav-arrow-left" />
        </Button>

        <Button
          aria-label="NextDate"
          disabled={isDisabledNextBtn}
          onClick={handleNextClick}
        >
          <Icon name="nav-arrow-right" />
        </Button>
      </div>
    </WrapperDiv>
  );
}

DaySwitch.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
