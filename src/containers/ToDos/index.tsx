// Node_modules
import React, { ReactElement, useCallback, useState } from 'react';
import cn from 'classnames';
// Components
import Table from '../../components/Table';
import Label from '../../components/Label';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Tab from '../../components/Tab';
import AddTodosForm from './components/AddTodosForm';
// Constants
import {
  DATE,
  STATUS,
  TASKS,
  TIME,
  PAUSED,
  ADD_TASK,
  TODO,
  DONE_TASKS,
  IN_PROGRESS,
  DONE,
  DAY,
  WEEK,
  MONTH,
  EDIT_TASK,
} from '../../constants/text';
import COLUMN_TYPE_KEYS from '../../constants/constants';
// Models
import { Column, Data } from '../../models/table';
// Icons
import PlusIcon from '../../icons/PlusIcon';
import EditIcon from '../../icons/EditIcon';
// Utils
import { filterDates } from '../../utils/dateTime';
// Data
import initialTodos from '../../data/todosList';

interface ButtonType {
  title?: string | number;
  onClick: () => void;
}

const ToDos = (): ReactElement => {
  // States
  const [todos, setTodos] = useState<Data[]>(initialTodos);
  const [isDoneList, setIsDoneList] = useState<boolean>(false);
  const [timeFilter, setTimeFilter] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<Data>({});

  /**
   * A function for open modal
   */
  const openModal = useCallback((todoItem = {}): void => {
    setFormData(todoItem);
    setIsModalOpen(true);
  }, []);

  /**
   * A function for close modal
   */
  const closeModal = useCallback((): void => {
    setIsModalOpen(false);
    setFormData({});
  }, []);

  /**
   * A function for generate status in table
   * @param todoItem: object type of table data model
   * @returns ReactElement
   */
  const generateStatus = useCallback((todoItem: Data): ReactElement => {
    return (
      <Label title={todoItem.status} isActive={todoItem.status === PAUSED} />
    );
  }, []);

  /**
   * A function for generate actions button in table
   * @param todoItem: object type of table data model
   * @returns ReactElement
   */
  const generateActions = useCallback(
    (todoItem: Data): ReactElement => {
      return (
        <span>
          <Button
            onClick={(): void => openModal(todoItem)}
            icon={<EditIcon />}
          />
        </span>
      );
    },
    [openModal],
  );

  /**
   * A function for set todoItem status to Done
   * @param todoItem: object type of table data model
   */
  const toggleStatus = useCallback(
    (todoItem: Data): void => {
      let status = '';
      switch (todoItem.status) {
        case DONE:
          status = IN_PROGRESS;
          break;
        case IN_PROGRESS:
          status = DONE;
          break;
        case PAUSED:
          status = DONE;
          break;
        default:
          status = IN_PROGRESS;
      }

      setTodos(
        todos.map((todo) =>
          todo.id === todoItem.id ? { ...todo, status } : todo,
        ),
      );
    },
    [todos],
  );

  /**
   * A function for generate checkboxes in table
   * @param todoItem: object type of table data model
   * @returns ReactElement
   */
  const generateCheckboxes = useCallback(
    (todoItem: Data): ReactElement => {
      return (
        <span>
          <input
            className="transform scale-150"
            type="checkbox"
            checked={todoItem.status === DONE}
            onChange={(): void => {
              toggleStatus(todoItem);
            }}
          />
        </span>
      );
    },
    [toggleStatus],
  );

  /**
   * A function for add todos
   */
  const addTodo = useCallback((): void => {
    if (formData.id) {
      // Edit mode
      setTodos(
        todos.map((todo) => (todo.id === formData.id ? formData : todo)),
      );
    } else {
      // Create mode
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          ...formData,
          status: formData.status || IN_PROGRESS,
          date: formData.date || new Date().toString(),
        },
      ]);
    }
    closeModal();
  }, [closeModal, formData, todos]);

  /**
   * A function for add todos
   */
  const filterTodo = useCallback((): Data[] => {
    return todos.filter((todo) =>
      isDoneList
        ? todo.status === DONE && filterDates(todo.date, timeFilter)
        : todo.status !== DONE && filterDates(todo.date, timeFilter),
    );
  }, [isDoneList, timeFilter, todos]);

  const columns: Column[] = [
    {
      id: 0,
      title: '',
      column: '',
      type: COLUMN_TYPE_KEYS.component,
      component: generateCheckboxes,
    },
    {
      id: 1,
      title: TASKS,
      column: 'task',
      type: COLUMN_TYPE_KEYS.string,
    },
    {
      id: 2,
      title: STATUS,
      column: '',
      type: COLUMN_TYPE_KEYS.component,
      component: generateStatus,
    },
    {
      id: 3,
      title: DATE,
      column: 'date',
      type: COLUMN_TYPE_KEYS.date,
    },
    {
      id: 4,
      title: TIME,
      column: 'date',
      type: COLUMN_TYPE_KEYS.time,
    },
    {
      id: 5,
      title: '',
      column: '',
      type: COLUMN_TYPE_KEYS.component,
      component: generateActions,
    },
  ];

  const buttons: ButtonType[] = [
    {
      title: MONTH,
      onClick: (): void => setTimeFilter(MONTH),
    },
    {
      title: WEEK,
      onClick: (): void => setTimeFilter(WEEK),
    },
    {
      title: DAY,
      onClick: (): void => setTimeFilter(DAY),
    },
  ];

  return (
    <div className="flex flex-col">
      <Button
        className="self-end button-shadow"
        title={ADD_TASK}
        onClick={openModal}
        icon={<PlusIcon />}
      />
      <div className="border-solid border-r-0 border-l-0 border-t-0 border-b border-gray-300">
        <Tab
          isActive={!isDoneList}
          className="mr-2"
          title={TODO}
          onClick={useCallback((): void => setIsDoneList(false), [])}
        />
        <Tab
          isActive={isDoneList}
          title={DONE_TASKS}
          onClick={useCallback((): void => setIsDoneList(true), [])}
        />
      </div>
      <div className="pt-10 pb-12 text-right">
        <span className="custom-shadow inline-block">
          {buttons.map((button, index) => (
            <button
              key={button.title}
              className={cn(
                'bg-white border-solid font-Roboto font-bold text-sm w-20 py-3 border-gray-300 outline-none',
                button.title === timeFilter ? 'text-blue-500' : 'text-gray-600',
                index === 0 && 'rounded-l-md border-r-0',
                index === buttons.length - 1 && 'rounded-r-md border-l-0',
              )}
              type="button"
              onClick={button.onClick}
            >
              {button.title}
            </button>
          ))}
        </span>
      </div>
      <Modal
        isOpen={isModalOpen}
        title={formData.id ? EDIT_TASK : ADD_TASK}
        onSubmit={addTodo}
        onClose={closeModal}
      >
        <AddTodosForm formData={formData} setFormData={setFormData} />
      </Modal>
      <Table data={filterTodo()} columns={columns} />
    </div>
  );
};

export default ToDos;
