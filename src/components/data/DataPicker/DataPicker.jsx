import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DataInput = () => {
  const [selectedDate, setSelectedDate] = (useState < Date) | (null > null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        className="border-[1px] border-amber-500 w-[300px]"
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Birthday"
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
};

export default DataInput;
