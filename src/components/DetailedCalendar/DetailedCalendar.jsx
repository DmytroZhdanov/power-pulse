import TitlePage from 'components/common/TitlePage/TitlePage';
import { useEffect, useMemo, useState } from 'react';
import Calendar from 'react-calendar';

import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { useLazyFetchDiaryAllQuery } from 'src/redux/api';
import { setStates } from 'src/redux/states/statesSlice';
import { generateYearsRange } from '../../utils';
import {
  CalendarWrapper,
  Item,
  List,
  Wrapper,
} from './DetailedCalendar.styled';

const DetailedCalendar = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  const [activeMonth, setActiveMonth] = useState(new Date().getMonth() + 1);
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const [activeDate, setActiveDate] = useState(new Date());

  const dispatch = useDispatch();

  const [fetchDiaryAll, { data, isLoading, isError, error }] =
    useLazyFetchDiaryAllQuery();

  useEffect(() => {
    dispatch(setStates({ isLoading, isError, error }));
  }, [dispatch, error, isError, isLoading]);

  useEffect(() => {
    const getAllDates = async () => {
      await fetchDiaryAll();
    };

    if (!error) {
      getAllDates();
    }
  }, [error, fetchDiaryAll]);

  useEffect(() => {
    setActiveDate(new Date(activeYear + ',' + activeMonth));
  }, [activeMonth, activeYear]);

  const years = useMemo(
    () => generateYearsRange(new Date().getFullYear() - 5, 12),
    [],
  );

  const dayContent = ({ date, view }) =>
    data && view === 'month' && data.includes(date.toDateString()) ? (
      <p>is something</p>
    ) : null;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <>
      <TitlePage text="Calendar" />

      <Wrapper>
        <List>
          {years.map(year => (
            <Item
              key={year}
              active={activeYear === year}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </Item>
          ))}
        </List>
        <List>
          {months.map((month, index) => (
            <Item
              key={month}
              active={activeMonth === index + 1}
              onClick={() => setActiveMonth(index + 1)}
            >
              {month}
            </Item>
          ))}
        </List>
        <CalendarWrapper>
          <Calendar
            locale="en"
            value={selectedDateRange}
            onChange={setSelectedDateRange}
            showNavigation={false}
            selectRange={true}
            returnValue={'range'}
            showFixedNumberOfWeeks={true}
            activeStartDate={activeDate}
            tileContent={dayContent}
            className="detailed-calendar"
          />
        </CalendarWrapper>
        <div>
          <p>{'Information for the period:'}</p>
          <p>
            {selectedDateRange[0]
              ? format(selectedDateRange[0], 'dd/MM/yyyy')
              : format(new Date(), 'dd/MM/yyyy')}
            {selectedDateRange[1]
              ? ' - ' + format(selectedDateRange[1], 'dd/MM/yyyy')
              : ''}
          </p>
          <p>..........</p>
          <p>..........</p>
          <p>..........</p>
          <p>..........</p>
        </div>
      </Wrapper>
    </>
  );
};
export default DetailedCalendar;
