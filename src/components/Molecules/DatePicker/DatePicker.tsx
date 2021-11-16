import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'components';

export interface DatePickerProps {
  initialValue?: Date,
  onChangeHandler?: (date: Date) => void,
}

const inputDateValidator = (date) => (date instanceof Date);

export const DatePicker = ({
  initialValue,
  onChangeHandler,
} : DatePickerProps):JSX.Element => {
  const currentDate = new Date();
  const initialDate = new Date(inputDateValidator(initialValue) ? initialValue : currentDate);

  const [month, setMonth] = useState(initialDate.getMonth() + 1);
  const [year, setYear] = useState(initialDate.getFullYear());

  const getSelectedDate = () => new Date(year, month - 1, 1);
  const setSelectedDate = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);

    if (onChangeHandler) onChangeHandler(new Date(selectedYear, selectedMonth - 1, 1));
  };

  const handleOnChange = (selectedDate) => {
    setSelectedDate(selectedDate.getFullYear(), selectedDate.getMonth() + 1);
  };

  return (
    <Tooltip
      content={
        <DateChanger initialValue={getSelectedDate()} onChangeHandler={handleOnChange} />
      }
      triggerType="click"
      className="rounded-lg"
    >
      <div className="text-sm text-center bg-yellow-50 space-x-2 px-2 py-1 border rounded-xl cursor-pointer text-blue-500">
        <span>{month || 'Month'}</span>

        <span>/</span>

        <span>{year || 'Year'}</span>
      </div>
    </Tooltip>
  );
};

DatePicker.propTypes = {
  initialValue: PropTypes.instanceOf(Date),
  onChangeHandler: PropTypes.func,
};

// Component for date changer
interface DateChangerProps {
  initialValue?: Date,
  onChangeHandler?: (date: Date) => void,
}

const DateChanger = ({ initialValue, onChangeHandler } : DateChangerProps) => {
  const currentDate = new Date();
  const initialDate = new Date(inputDateValidator(initialValue) ? initialValue : currentDate);

  const [month, setMonth] = useState(initialDate.getMonth() + 1);
  const [year, setYear] = useState(initialDate.getFullYear());

  const handleDateChange = (changedYear, changedMonth) => {
    setYear(changedYear);
    setMonth(changedMonth);
    onChangeHandler(new Date(changedYear, changedMonth - 1, 1));
  };

  const handleYearChange = (e) => handleDateChange(e.target.value, month);
  const handleMonthChange = (e) => handleDateChange(year, e.target.value);

  return (
    <div className="flex space-x-2 items-center p-1">
      <input
        className="p-0 h-4 border-none text-center font-bold focus:border-none"
        type="number"
        name="monthChanger"
        min="1"
        max="12"
        onChange={(e) => {
          handleMonthChange(e);
        }}
        value={month}
      />

      <span>|</span>

      <input
        className="p-0 h-4 border-none text-center font-bold focus:border-none"
        type="number"
        name="quantity"
        min="1900"
        max={currentDate.getFullYear()}
        onChange={(e) => {
          handleYearChange(e);
        }}
        value={year}
      />
    </div>
  );
};

DateChanger.propTypes = {
  initialValue: PropTypes.instanceOf(Date),
  onChangeHandler: PropTypes.func,
};
