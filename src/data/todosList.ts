// Models
import { Data } from '../models/table';
// Constants
import { DONE, IN_PROGRESS, PAUSED } from '../constants/text';

const initialTodos: Data[] = [
  {
    id: 1,
    task: 'Task #1',
    status: PAUSED,
    date: 'Sat Oct 31 2020 14:52:01 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 2,
    task: 'Task #2',
    status: IN_PROGRESS,
    date: 'Sat Oct 31 2020 14:52:01 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 3,
    task: 'Task #3',
    status: DONE,
    date: 'Sat Oct 31 2020 14:52:01 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 4,
    task: 'Task #4',
    status: IN_PROGRESS,
    date: 'Sat Oct 01 2019 14:52:01 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 5,
    task: 'Task #5',
    status: IN_PROGRESS,
    date: 'Sat Aug 01 2020 14:52:01 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 6,
    task: 'Task #6',
    status: IN_PROGRESS,
    date: 'Sun Nov 08 2020 00:00:00 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 7,
    task: 'First Task',
    status: IN_PROGRESS,
    date: 'Sat Oct 30 2020 14:52:01 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 8,
    task: 'Task',
    status: IN_PROGRESS,
    date: 'Sun Nov 06 2020 00:00:00 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 9,
    task: 'My Task',
    status: PAUSED,
    date: 'Sun Nov 07 2020 00:00:00 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 10,
    task: 'Second Task',
    status: DONE,
    date: 'Sun Nov 08 2020 00:00:00 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 11,
    task: 'Task #7',
    status: DONE,
    date: 'Sun Nov 09 2020 14:52:01 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 12,
    task: 'Task #8',
    status: DONE,
    date: 'Sun Nov 11 2020 00:00:00 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 13,
    task: 'Task #9',
    status: IN_PROGRESS,
    date: 'Sun Jan 11 2020 00:00:00 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 14,
    task: 'Task #10',
    status: IN_PROGRESS,
    date: 'Sun Apr 11 2020 00:00:00 GMT+0330 (Iran Standard Time)',
  },
];

export default initialTodos;
