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

  // тут треба отримати всі дати у яких є якісь записи
  const datesWithData = [
    '2023-10-09',
    '2023-10-15',
    '2023-10-23',
    '2023-10-24',
  ];

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

  const setActiveDate = ({ date, view }) => {
    const isSkip =
      date.getTime() > dateOfUserRegistration.getTime() ||
      date.toDateString() === dateOfUserRegistration.toDateString();

    if (isSkip) {
      return false;
    } else if (view !== 'month') {
      return false;
    } else {
      return !datesWithData.includes(format(date, 'yyyy-MM-dd'));
    }
  };

  const isDisabledPrevBtn =
    isDateOfUserRegistration ||
    selectedDate.getTime() < dateOfUserRegistration.getTime();
  
  const isDisabledNextBtn =
    isToday ||
    (selectedDate.getTime() < dateOfUserRegistration.getTime() &&
      selectedDate.toDateString() !== dateOfUserRegistration.toDateString());

  return (
    <Wrapper>
      <CalendarWrapper>
        <Calendar
          tileDisabled={setActiveDate}
          onChange={setSelectedDate}
          value={selectedDate}
          // minDate={dateOfUserRegistration}
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
