import PropTypes from 'prop-types';
<<<<<<< HEAD
import { format } from 'date-fns';
=======
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { selectUserRegistrationDate } from 'src/redux/auth/selectors';

import Calendar from '../../Calendar/Calendar';
import Icon from 'components/common/IconsComp/Icon';

import {
  Button,
  CalendarIcon,
  CalendarWrapper,
  InputText,
  InputWrapper,
  Wrapper,
} from './DaySwitch.style';
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9

import Calendar from 'components/Calendar/Calendar';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { Button, CalendarWrapper, Wrapper } from './DaySwitch.style';
import { selectUserRegistrationDate } from 'src/redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function DaySwitch({ selectedDate, setSelectedDate }) {
  const dateOfUserRegistration = new Date(
    useSelector(selectUserRegistrationDate),
  );

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

  return (
    <Wrapper>
      <CalendarWrapper>
        <Calendar
<<<<<<< HEAD
          inputText={format(selectedDate, 'dd/MM/yyyy')}
          selected={selectedDate}
          onSelect={setSelectedDate}
          fromDate={dateOfUserRegistration}
        />
      </CalendarWrapper>

=======
          onChange={setSelectedDate}
          value={selectedDate}
          minDate={dateOfUserRegistration}
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
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
      <div>
        <Button
          disabled={isDateOfUserRegistration}
          onClick={handlePreviousClick}
        >
<<<<<<< HEAD
          <svg>
            <use href={sprite + '#nav-arrow-left'}></use>
          </svg>
        </Button>
        <Button onClick={handleNextClick}>
          <svg>
            <use href={sprite + '#nav-arrow-right'}></use>
          </svg>
=======
          <Icon name="nav-arrow-left" />
        </Button>
        <Button disabled={isToday} onClick={handleNextClick}>
          <Icon name="nav-arrow-right" />
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
        </Button>
      </div>
    </Wrapper>
  );
}

DaySwitch.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
