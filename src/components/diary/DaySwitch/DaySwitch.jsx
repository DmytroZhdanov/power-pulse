import PropTypes from 'prop-types';
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

  return (
    <Wrapper>
      <CalendarWrapper>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          minDate={dateOfUserRegistration}
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
        <Button
          disabled={isDateOfUserRegistration}
          onClick={handlePreviousClick}
        >
          <Icon name="nav-arrow-left" />
        </Button>
        <Button onClick={handleNextClick}>
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
