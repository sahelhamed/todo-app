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
    date: 'Sat Oct 1 2019 14:52:01 GMT+0330 (Iran Standard Time)',
  },
  {
    id: 5,
    task: 'Task #4',
    status: IN_PROGRESS,
    date: 'Sat Aug 1 2020 14:52:01 GMT+0330 (Iran Standard Time)',
  },
];

export default initialTodos;
