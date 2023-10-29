<<<<<<< HEAD
import { format } from 'date-fns';

import PropTypes from 'prop-types';

import Calendar from '../../Calendar/Calendar';
import { WrapperCalendarInput } from './BirthdayInput.style';

export default function BirthdayInput({ selectedDate, setSelectedDate }) {
  const defaultInputValue = 'Birthday';

  const today = new Date();
  const eighteenYearsAgo = new Date(today).setFullYear(
    today.getFullYear() - 18,
  );
  const maximumAge = new Date(today).setFullYear(today.getFullYear() - 100);

  const inputText =
    selectedDate.toString() === new Date().toString()
      ? defaultInputValue
      : format(selectedDate, 'dd.MM.yyyy');

  return (
    <WrapperCalendarInput>
      <Calendar
        inputText={inputText}
        selected={selectedDate}
        onSelect={setSelectedDate}
        toDate={eighteenYearsAgo}
        fromDate={maximumAge}
        captionLayout="dropdown-buttons"
      />
    </WrapperCalendarInput>
=======
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useLazyFetchUserParamsQuery } from 'src/redux/api';

import Calendar from '../../Calendar/Calendar';
import Icon from 'src/components/common/IconsComp/Icon';

import {
  CalendarIcon,
  DefaultInputText,
  InputHidden,
  WrapperCalendarInput,
} from './BirthdayInput.style';

export default function BirthdayInput({ selectedDate, setSelectedDate }) {
  const [showDefaultInputValue, setShowDefaultInputValue] = useState(true);
  const defaultInputValue = 'Birthday';

  const setDate = date => {
    setShowDefaultInputValue(false);
    setSelectedDate(date);
  };

  const [fetchUserParams] = useLazyFetchUserParamsQuery();

  useEffect(() => {
    const getUserParams = async () => {
      const { user } = await fetchUserParams().unwrap();
      if (user?.userParams?.birthday) {
        setShowDefaultInputValue(false);
        setSelectedDate(new Date(user?.userParams?.birthday));
      } else {
        setShowDefaultInputValue(true);
      }
    };

    getUserParams();
  }, [fetchUserParams, setSelectedDate]);

  const today = new Date();

  const eighteenYearsAgo = new Date(
    today.setFullYear(today.getFullYear() - 18),
  );

  const maximumAge = new Date(today.setFullYear(today.getFullYear() - 100));

  const inputValue = showDefaultInputValue
    ? defaultInputValue
    : format(selectedDate, 'yyyy-MM-dd');
  const inputText = showDefaultInputValue
    ? defaultInputValue
    : format(selectedDate, 'dd.MM.yyyy');

  return (
    <>
      <InputHidden
        disabled
        type="date"
        name="birthday"
        defaultValue={inputValue}
      />
      <Calendar
        maxDate={eighteenYearsAgo}
        minDate={maximumAge}
        onChange={setDate}
        value={selectedDate}
      >
        <WrapperCalendarInput>
          <DefaultInputText setColor={showDefaultInputValue ? '' : 'full'}>
            {inputText}
          </DefaultInputText>
          <CalendarIcon>
            <Icon name="calendar" />
          </CalendarIcon>
        </WrapperCalendarInput>
      </Calendar>
    </>
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  );
}

BirthdayInput.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
