import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Icon from 'components/common/IconsComp/Icon';
import Calendar from 'components/Calendar/Calendar';
import {
  ButtonAdd,
  CalendarIconDiv,
  CalendarInputTextP,
  InputLabelSpan,
  InputTime,
  InputWrapperDiv,
  WrapperDiv,
  WrapperCalendarInputDiv,
  InputBeforeSpan,
  ErrorMessage,
} from './AddExercisesFromPastDaysForm.styled';
import { CSSTransition } from 'react-transition-group';

export default function AddExercisesFromPastDaysForm({ onSubmit }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const transitionRef = useRef(null);
  const errorTimeoutRef = useRef(null);

  const handleChange = evt => {
    const value = evt.target.value;

    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
    }

    if (value.length > 11) {
      return;
    }

    if (/^[0-9]*$/.test(value) || value === '') {
      setTime(value);
      setErrorMessage(false);
    } else {
      setErrorMessage(true);

      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
      errorTimeoutRef.current = setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
  };

  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, []);

  const setDate = date => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    onSubmit({ time: Number(time), date: selectedDate });
  };

  const inputText = format(selectedDate, 'dd.MM.yyyy');

  return (
    <WrapperDiv>
      <label>
        <InputWrapperDiv>
          <InputLabelSpan>Add time</InputLabelSpan>

          <InputTime
            placeholder="min 60 sec."
            type="text"
            value={time}
            onChange={handleChange}
          />
          <InputBeforeSpan>sec.</InputBeforeSpan>

          <CSSTransition
            in={errorMessage}
            nodeRef={transitionRef}
            timeout={300}
            classNames="error-message"
            unmountOnExit
          >
            <ErrorMessage ref={transitionRef}>Enter a number</ErrorMessage>
          </CSSTransition>
        </InputWrapperDiv>
      </label>

      <InputWrapperDiv>
        <InputLabelSpan>Choice day</InputLabelSpan>

        <Calendar maxDate={new Date()} onChange={setDate} value={selectedDate}>
          <WrapperCalendarInputDiv>
            <CalendarInputTextP>{inputText}</CalendarInputTextP>

            <CalendarIconDiv>
              <Icon name="calendar" />
            </CalendarIconDiv>
          </WrapperCalendarInputDiv>
        </Calendar>
      </InputWrapperDiv>

      <div>
        <ButtonAdd onClick={handleSubmit}>Add to diary</ButtonAdd>
      </div>
    </WrapperDiv>
  );
}

AddExercisesFromPastDaysForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
