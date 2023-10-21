import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Calendar from 'components/Calendar/Calendar';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { Button, CalendarWrapper, Wrapper } from './DaySwitch.style';

export default function DaySwitch({ selectedDate, setSelectedDate }) {
  //сюди треба передати дату реєстрації користувача  з стора
  const dateOfUserRegistration = new Date(2023, 9, 18, 10, 58);

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
          inputText={format(selectedDate, 'dd/MM/yyyy')}
          selected={selectedDate}
          onSelect={setSelectedDate}
          fromDate={dateOfUserRegistration}
        />
      </CalendarWrapper>

      <div>
        <Button
          disabled={isDateOfUserRegistration}
          onClick={handlePreviousClick}
        >
          <svg>
            <use href={sprite + '#nav-arrow-left'}></use>
          </svg>
        </Button>
        <Button onClick={handleNextClick}>
          <svg>
            <use href={sprite + '#nav-arrow-right'}></use>
          </svg>
        </Button>
      </div>
    </Wrapper>
  );
}

DaySwitch.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
