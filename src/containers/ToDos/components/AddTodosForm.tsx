// Node_modules
import React, { ReactElement, useCallback } from 'react';
import { Moment } from 'moment';
// Constants
import {
  DATE,
  IN_PROGRESS,
  PAUSED,
  STATUS,
  TASK,
} from '../../../constants/text';
// Models
import { Data } from '../../../models/table';
// Components
import DateTimePicker from '../../../components/DateTimePicker';

interface Props {
  formData: Data;
  setFormData: (data: Data) => void;
}

const AddTodosForm = ({ formData, setFormData }: Props): ReactElement => {
  /**
   * A function for open modal
   * @param value: field value
   * @param field: field name
   */
  const handleOnChange = (value: string, field: string): void => {
    setFormData({ ...formData, [field]: value });
  };

  const handleDateChange = useCallback(
    (date: string | Moment): void => {
      setFormData({ ...formData, date: date.toString() });
    },
    [formData, setFormData],
  );

  return (
    <>
      <div className="mb-2">
        <span className="font-medium font-Roboto font-base">{TASK}:</span>
        <br />
        <input
          className="p-2"
          value={formData.task}
          onChange={(e): void => handleOnChange(e.target.value, 'task')}
        />
      </div>
      <div className="mb-2">
        <span className="font-medium font-Roboto font-base">{DATE}:</span>
        <br />
        <DateTimePicker
          handleDateChange={handleDateChange}
          selected={formData.date}
        />
      </div>
      <div className="mb-2">
        <span className="font-medium font-Roboto font-base">{STATUS}:</span>
        <br />
        <select
          id="status"
          name="status"
          className="p-2 w-full"
          value={formData.status}
          onChange={(e): void => handleOnChange(e.target.value, 'status')}
          onBlur={(e): void => handleOnChange(e.target.value, 'status')}
        >
          <option value={IN_PROGRESS}>{IN_PROGRESS}</option>
          <option value={PAUSED}>{PAUSED}</option>
        </select>
      </div>
    </>
  );
};

AddTodosForm.defaultProps = {};

export default AddTodosForm;
