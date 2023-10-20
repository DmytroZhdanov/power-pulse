import 'react-day-picker/dist/style.css';
import PropTypes from 'prop-types';
import Calendar from 'components/Calendar/Calendar';
import {
  Button,
  ButtonsWrapper,
  CalendarWrapper,
  Wrapper,
} from './DaySwitch.style';
import { format } from 'date-fns';

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
    <>
      <Wrapper>
        <CalendarWrapper>
          <Calendar
            inputText={format(selectedDate, 'dd/MM/yyyy')}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            dateOfUserRegistration={dateOfUserRegistration}
          />
        </CalendarWrapper>
        <ButtonsWrapper>
          <Button
            disabled={isDateOfUserRegistration}
            onClick={handlePreviousClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
              width={12}
              height={12}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </Button>
          <Button onClick={handleNextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
              width={12}
              height={12}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m1 1 4 4-4 4"
              />
            </svg>
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
}

DaySwitch.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
