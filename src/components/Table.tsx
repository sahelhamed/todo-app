// Node_modules
import React, { ReactElement, memo, useState } from 'react';
import cn from 'classnames';
import moment from 'moment';
import { isEqual } from 'lodash';
// Models
import { Column, Data } from '../models/table';
// Constants
import COLUMN_TYPE_KEYS from '../constants/constants';
// Utils
import { formatDate, formatTime } from '../utils/dateTime';
// Icons
import UpIcon from '../icons/UpIcon';
import DownIcon from '../icons/DownIcon';

interface Props {
  data: Data[];
  columns: Column[];
}

const Table = ({ data, columns }: Props): ReactElement => {
  // States
  const [sortedField, setSortedField] = useState<string | number>('');
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
   * set selected sorted field and isAscending state
   * @param item: object type of column model
   */
  const selectSortedField = (item: Column): void => {
    if (!item.isSortable) {
      return;
    }
    if (sortedField === item.column) {
      setIsAscending(!isAscending);
    } else {
      setSortedField(item.column);
      setIsAscending(true);
    }
  };

  /**
   * A function for sort date column in table
   * @param itemOne: First item
   * @param itemTow: Second item
   */
  const handleDateSort = (itemOne: Data, itemTow: Data): number => {
    if (
      moment(new Date(itemOne[sortedField])).isBefore(
        new Date(itemTow[sortedField]),
      )
    ) {
      return isAscending ? -1 : 1;
    }
    if (
      moment(new Date(itemOne[sortedField])).isAfter(
        new Date(itemTow[sortedField]),
      )
    ) {
      return isAscending ? 1 : -1;
    }
    return 0;
  };

  /**
   * A function for sort string column in table
   * @param itemOne: First item
   * @param itemTow: Second item
   */
  const handleStringSort = (itemOne: Data, itemTow: Data): number => {
    if (itemOne[sortedField] < itemTow[sortedField]) {
      return isAscending ? -1 : 1;
    }
    if (itemOne[sortedField] > itemTow[sortedField]) {
      return isAscending ? 1 : -1;
    }
    return 0;
  };

  /**
   * A function for sort data in table
   */
  const handleSort = (): Data[] => {
    return sortedField !== ''
      ? data.sort(sortedField === 'date' ? handleDateSort : handleStringSort)
      : data;
  };

  return (
    <table className="table-auto w-full">
      {/* --------------------------Table header-------------------------- */}
      <thead>
        <tr>
          {columns.map((item: Column) => (
            <th
              key={item.id}
              className="text-left py-5 border-solid border-r-0 border-l-0 border-t border-b border-gray-300"
            >
              <button
                className="flex items-center bg-white text-lg text-gray-600 font-Roboto border-none outline-none"
                type="button"
                onClick={(): void => selectSortedField(item)}
              >
                {item.title}
                <span
                  className={cn(
                    'ml-1 mt-1',
                    item.isSortable && sortedField === item.column
                      ? 'visible'
                      : 'invisible',
                  )}
                >
                  {!isAscending && sortedField === item.column ? (
                    <UpIcon />
                  ) : (
                    <DownIcon />
                  )}
                </span>
              </button>
            </th>
          ))}
        </tr>
      </thead>
      {/* --------------------------Table body-------------------------- */}
      <tbody>
        {handleSort().map((item: Data) => (
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
