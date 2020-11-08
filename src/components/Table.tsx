// Node_modules
import React, { ReactElement, memo, useState } from 'react';
import { isEqual } from 'lodash';
// Models
import { Column, Data } from '../models/table';
// Constants
import COLUMN_TYPE_KEYS from '../constants/constants';
// Utils
import { formatDate, formatTime } from '../utils/dateTime';
import Button from './Button';
// Icons
import UpIcon from '../icons/UpIcon';
import DownIcon from '../icons/DownIcon';

interface Props {
  data: Data[];
  columns: Column[];
}

const Table = ({ data, columns }: Props): ReactElement => {
  // States
  const [sortedField, setSortedField] = useState<string>('');
  const [isAscending, setIsAscending] = useState<boolean>(true);

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

  /**
   * A selected sorted field
   * @param field: column that should sort
   */
  const selectSortedField = (field: string): void => {
    if (sortedField === field) {
      setIsAscending(!isAscending);
    } else {
      setSortedField(field);
    }
  };

  /**
   * A function for sort data in table
   */
  const handleSort = (): Data[] => {
    return sortedField !== ''
      ? data.sort((itemOne: Data, itemTow: Data): number => {
          if (itemOne[sortedField] < itemTow[sortedField]) {
            return isAscending ? -1 : 1;
          }
          if (itemOne[sortedField] > itemTow[sortedField]) {
            return isAscending ? 1 : -1;
          }
          return 0;
        })
      : data;
  };

  return (
    <table className="table-auto w-full">
      {/* --------------------------Table header-------------------------- */}
      <tr>
        {columns.map((item: Column) => (
          <th
            key={item.id}
            className="py-5 border-t border-b border-gray-500 text-gray-600 font-Roboto"
          >
            <span className="flex justify-center items-center">
              <span>{item.title}</span>
              {item.isSortable && (
                <Button
                  className="mt-1"
                  onClick={(): void => selectSortedField(item.column)}
                  icon={isAscending ? <DownIcon /> : <UpIcon />}
                />
              )}
            </span>
          </th>
        ))}
      </tr>

      {/* --------------------------Table body-------------------------- */}
      {handleSort().map((item: Data) => (
        <tr key={item.id}>
          {columns.map((columnItem: Column) => (
            <td
              key={columnItem.id}
              className="py-12 border-b border-gray-500 text-center text-black font-Roboto"
            >
              {generateCell(item, columnItem)}
            </td>
          ))}
        </tr>
      ))}
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
