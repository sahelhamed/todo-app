// Node modules
import React, { memo, ReactElement } from 'react';
import { Moment } from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

interface Props {
  selected: string | number;
  handleDateChange: (date: string | Moment) => void;
  className?: string;
}

const DateTimePicker = ({
  selected,
  handleDateChange,
  className,
}: Props): ReactElement => {
  return (
    <Datetime
      value={selected ? new Date(selected) : new Date()}
      onChange={handleDateChange}
      inputProps={{ className: `p-2 ${className}` }}
    />
  );
};

DateTimePicker.defaultProps = {
  className: '',
};

export default memo(DateTimePicker);
