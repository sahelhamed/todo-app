// Node_modules
import React, { ReactElement } from 'react';
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

  const handleDateChange = (date: Date): void =>
    setFormData({ ...formData, date: date.toString() });

  return (
    <>
      <div className="mb-2">
        <span>{TASK}:</span>
        <br />
        <input
          className="p-2"
          value={formData.task}
          onChange={(e): void => handleOnChange(e.target.value, 'task')}
        />
      </div>
      <div className="mb-2">
        <span>{STATUS}:</span>
        <br />
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select
          id="status"
          name="status"
          className="p-2 w-full"
          onChange={(e): void => handleOnChange(e.target.value, 'status')}
        >
          <option value={IN_PROGRESS}>{IN_PROGRESS}</option>
          <option value={PAUSED}>{PAUSED}</option>
        </select>
      </div>
      <div className="mb-2">
        <span>{DATE}:</span>
        <br />
        <DateTimePicker
          handleDateChange={handleDateChange}
          selected={formData.date}
          isClearable={false}
        />
      </div>
    </>
  );
};

AddTodosForm.defaultProps = {};

export default AddTodosForm;
