// Node modules
import React, { memo, ReactElement } from 'react';
import { isEqual } from 'lodash';
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

const areEqual = (prevProps: Props, nextProps: Props): boolean => {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  return isEqual(prevProps.selected, nextProps.selected);
};

export default memo(DateTimePicker, areEqual);
