// Node_modules
import React, { ReactElement, memo } from 'react';
import { isEqual } from 'lodash';
// Models
import { Column, Data } from '../models/table';
// Constants
import COLUMN_TYPE_KEYS from '../constants/constants';
// Utils
import { formatDate, formatTime } from '../utils/dateTime';

interface Props {
  data: Data[];
  columns: Column[];
}

const Table = ({ data, columns }: Props): ReactElement => {
  /**
   * A function for generate cell in table
   * @param item: object type of data model
   * @param columnItem: object type of column model
   * @returns ReactText
   */
  const generateCell = (
    item: Data,
    columnItem: Column,
  ): ReactElement | string | number => {
    switch (columnItem.type) {
      case COLUMN_TYPE_KEYS.string:
        return item[columnItem.column];

      case COLUMN_TYPE_KEYS.date:
        return formatDate(item[columnItem.column]);

      case COLUMN_TYPE_KEYS.time:
        return formatTime(item[columnItem.column]);

      case COLUMN_TYPE_KEYS.component:
        return columnItem.component ? columnItem.component(item) : '';

      default:
        return '';
    }
  };

  return (
    <table className="table-auto w-full">
      {/* --------------------------Table header-------------------------- */}
      <thead>
        <tr>
          {columns.map((item: Column) => (
            <th
              key={item.id}
              className="text-left text-lg py-5 border-solid border-r-0 border-l-0 border-t border-b border-gray-300 text-gray-600 font-Roboto"
            >
              {item.title}
            </th>
          ))}
        </tr>
      </thead>

      {/* --------------------------Table body-------------------------- */}
      <tbody>
        {data.map((item: Data) => (
          <tr key={item.id}>
            {columns.map((columnItem: Column) => (
              <td
                key={columnItem.id}
                className="text-left text-lg py-12 border-b border-r-0 border-l-0 border-t-0 border-gray-300 border-solid text-black font-Roboto font-medium"
              >
                {generateCell(item, columnItem)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const areEqual = (prevProps: Props, nextProps: Props): boolean => {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
  return isEqual(prevProps, nextProps);
};

export default memo(Table, areEqual);
