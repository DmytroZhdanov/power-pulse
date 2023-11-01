import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useLazyFetchDiaryAllQuery } from 'src/redux/api';
import { selectUserRegistrationDate } from 'src/redux/auth/selectors';

import Calendar from 'components/Calendar/Calendar';
import Icon from 'components/common/IconsComp/Icon';

import {
  Button,
  CalendarIcon,
  CalendarWrapper,
  InputText,
  InputWrapper,
  Wrapper,
} from './DaySwitch.style';

export default function DaySwitch({ selectedDate, setSelectedDate }) {
  const dateOfUserRegistration = new Date(
    useSelector(selectUserRegistrationDate),
  );

  const [fetchDiaryAll, { data, error }] = useLazyFetchDiaryAllQuery();

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
      date.getTime() > dateOfUserRegistration.getTime() ||
      date.toDateString() === dateOfUserRegistration.toDateString();

    if (isSkip) {
      return false;
    } else if (view !== 'month') {
      return false;
    } else {
      return !data.includes(date.toDateString());
    }
  };

  const handlePreviousClick = () => {
    const previousDate = new Date(selectedDate);
    previousDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(previousDate);
  };

  const handleNextClick = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDate);
  };

  const isDateOfUserRegistration =
    selectedDate.toDateString() === dateOfUserRegistration.toDateString();

  const isToday = selectedDate.toDateString() === new Date().toDateString();

  const isDisabledPrevBtn =
    isDateOfUserRegistration ||
    selectedDate.getTime() < dateOfUserRegistration.getTime();

  const isDisabledNextBtn =
    isToday ||
    (selectedDate.getTime() < dateOfUserRegistration.getTime() &&
      selectedDate.toDateString() !== dateOfUserRegistration.toDateString());

  const param = error
    ? {
        minDate: dateOfUserRegistration,
      }
    : {
        minDate:
          data && data.length !== 0
            ? new Date(data[0])
            : dateOfUserRegistration,
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
        <Button disabled={isDisabledPrevBtn} onClick={handlePreviousClick}>
          <Icon name="nav-arrow-left" />
        </Button>
        <Button disabled={isDisabledNextBtn} onClick={handleNextClick}>
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
