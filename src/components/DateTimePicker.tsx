// Node modules
import React, { ReactElement } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  selected: string | number;
  handleDateChange: (date: Date) => void;
  className?: string;
  isClearable?: boolean;
}

const DateTimePicker = ({
  isClearable,
  selected,
  handleDateChange,
  className,
}: Props): ReactElement => (
  <>
    <DatePicker
      isClearable={isClearable}
      selected={selected ? new Date(selected) : new Date()}
      onChange={handleDateChange}
      className={`p-2 ${className}`}
    />
  </>
);
DateTimePicker.defaultProps = {
  isClearable: true,
  className: '',
};
export default DateTimePicker;
