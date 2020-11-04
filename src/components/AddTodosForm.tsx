// Node_modules
import React, { ReactElement } from 'react';
// Constants
import { STATUS, TASK } from '../constants/text';
// Models
import { Data } from '../models/table';

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
        <input
          className="p-2"
          value={formData.status}
          onChange={(e): void => handleOnChange(e.target.value, 'status')}
        />
      </div>
    </>
  );
};

AddTodosForm.defaultProps = {};

export default AddTodosForm;
