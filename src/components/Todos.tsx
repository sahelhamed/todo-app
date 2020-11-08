// Node_modules
import React, { ReactElement } from 'react';
// Components
import Table from './Table';
import Label from './Label';
// Constants
import { DATE, STATUS, TASKS, TIME, PAUSED } from '../constants/text';
import COLUMN_TYPE_KEYS from '../constants/constants';
// Models
import { Column, Data } from '../models/table';

const Todos = (): ReactElement => {
  /**
   * A function for generate status in table
   * @param todoItem: object type of table data model
   * @returns ReactElement
   */
  const generateStatus = (todoItem: Data): ReactElement => {
    return (
      <Label title={todoItem.status} isActive={todoItem.status === PAUSED} />
    );
  };

  const todos: Data[] = [
    {
      id: 1,
      task: 'Task #1',
      status: 'Paused',
      date: 'Sat Oct 31 2020 14:52:01 GMT+0330 (Iran Standard Time)',
    },
    {
      id: 2,
      task: 'Task #1',
      status: 'In progress',
      date: 'Sat Oct 31 2020 14:52:01 GMT+0330 (Iran Standard Time)',
    },
  ];

  const columns: Column[] = [
    {
      id: 0,
      title: TASKS,
      column: 'task',
      type: COLUMN_TYPE_KEYS.string,
    },
    {
      id: 1,
      title: STATUS,
      column: 'status',
      type: COLUMN_TYPE_KEYS.component,
      component: generateStatus,
    },
    {
      id: 2,
      title: DATE,
      column: 'date',
      type: COLUMN_TYPE_KEYS.date,
    },
    {
      id: 3,
      title: TIME,
      column: 'date',
      type: COLUMN_TYPE_KEYS.time,
    },
  ];

  return (
    <div>
      <Table data={todos} columns={columns} />
    </div>
  );
};

export default Todos;
