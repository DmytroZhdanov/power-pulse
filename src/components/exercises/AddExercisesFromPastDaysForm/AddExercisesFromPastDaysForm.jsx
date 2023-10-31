import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Icon from 'src/components/common/IconsComp/Icon';
import Calendar from '../../Calendar/Calendar';

import {
  ButtonAdd,
  CalendarIcon,
  CalendarInputText,
  InputLabel,
  InputTime,
  InputWrapper,
  Wrapper,
  WrapperCalendarInput,
} from './AddExercisesFromPastDaysForm.styled';

const AddExercisesFromPastDaysForm = ({ onSubmit }) => {
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
    <Wrapper>
      <label>
        <InputWrapper>
          <InputLabel>Add time</InputLabel>
          <InputTime
            placeholder="min 60 sec."
            type="number"
            value={time}
            onChange={handleChange}
          />
        </InputWrapper>
      </label>

      <InputWrapper>
        <InputLabel>Choice day</InputLabel>
        <Calendar
          maxDate={new Date()}
          onChange={setDate}
          value={selectedDate}
        >
          <WrapperCalendarInput>
            <CalendarInputText>{inputText}</CalendarInputText>
            <CalendarIcon>
              <Icon name="calendar" />
            </CalendarIcon>
          </WrapperCalendarInput>
        </Calendar>
      </InputWrapper>

      <div>
        <ButtonAdd onClick={handleSubmit}>Add to diary</ButtonAdd>
      </div>
    </Wrapper>
  );
};
export default AddExercisesFromPastDaysForm;

AddExercisesFromPastDaysForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
