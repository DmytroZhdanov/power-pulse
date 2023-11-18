import { format } from 'date-fns';

import Calendar from 'components/Calendar/Calendar';
import Icon from 'components/common/IconsComp/Icon';
import { useEffect, useState } from 'react';
import { CalendarIconDiv } from './CalendarRange.staled';
import { generateDateRange } from '../../utils/generateDateRange';

export default function CalendarRange() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startEndDate, setStartEndDate] = useState([selectedDate]);
  const [diapasonDates, setDiapasonDates] = useState([]);

  useEffect(() => {
    if (startEndDate[1]) {
      setDiapasonDates(generateDateRange(startEndDate[0], startEndDate[1]));
    } else if (startEndDate[0]) {
      setDiapasonDates(generateDateRange(startEndDate[0], startEndDate[0]));
    }
  }, [startEndDate]);

  const handleChangeDate = date => {
    setSelectedDate(date);

    setStartEndDate(prev => {
      const sortedDates = [...prev, date].sort((a, b) => a - b);
      const startDate = sortedDates[0];
      const endDate = sortedDates[sortedDates.length - 1];

      if (startDate.getTime() === endDate.getTime()) {
        return [startDate];
      }
      if (
        date.getTime() > startDate.getTime() &&
        date.getTime() < endDate.getTime()
      ) {
        return [startDate, date];
      }
      if (prev[0].toDateString() === date.toDateString()) {
        return [startDate];
      }
      if (prev[prev.length - 1].toDateString() === date.toDateString()) {
        return [endDate];
      }

      return [startDate, endDate];
    });
  };

  const setCustomBtnClassName = ({ date, view }) => {
    if (date.toDateString() === diapasonDates[0]) {
      return 'active-range-start';
    }
    if (date.toDateString() === diapasonDates[diapasonDates.length - 1]) {
      return 'active-range-end';
    }

    if (view === 'month' && diapasonDates.includes(date.toDateString())) {
      return 'active-range';
    } else {
      return '';
    }
  };

  return (
    <Calendar
      onChange={handleChangeDate}
      value={selectedDate}
      maxDate={new Date()}
      tileClassName={setCustomBtnClassName}
    >
      <div style={{ display: 'flex', gap: '20px' }}>
        <p>
          {startEndDate[0]
            ? format(startEndDate[0], 'dd/MM/yyyy')
            : format(new Date(), 'dd/MM/yyyy')}
          {startEndDate[1] ? ' - ' + format(startEndDate[1], 'dd/MM/yyyy') : ''}
        </p>

        <CalendarIconDiv>
          <Icon name="calendar" />
        </CalendarIconDiv>
      </div>
    </Calendar>
  );
}
