import { useState } from 'react';
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
} from './AddExercisesFromPastDaysForm.styled';

export default function AddExercisesFromPastDaysForm({ onSubmit }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState('');

  const handleChange = evt => {
    setTime(evt.target.value);
  };

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
            type="number"
            value={time}
            onChange={handleChange}
          />
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
