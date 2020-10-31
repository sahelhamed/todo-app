// Node_modules
import React, { ReactElement } from 'react';
// import PropTypes from 'prop-types';
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

const Table: React.FC<Props> = ({ data, columns }) => {
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
      <tr>
        {columns.map((item: Column) => (
          <th
            key={item.id}
            className="py-5 border-t border-b border-gray-500 text-gray-600"
          >
            {item.title}
          </th>
        ))}
      </tr>

      {/* --------------------------Table body-------------------------- */}
      {data.map((item: Data) => (
        <tr key={item.id}>
          {columns.map((columnItem: Column) => (
            <td
              key={columnItem.id}
              className="py-12 border-b border-gray-500 text-center text-black"
            >
              {generateCell(item, columnItem)}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

Table.propTypes = {
  /*
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      task: PropTypes.number,
      status: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
    }),
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      column: PropTypes.string,
    }),
  ),
     */
};

Table.defaultProps = {
  data: [],
  columns: [],
};

export default Table;
