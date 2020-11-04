// Node_modules
import React, { ReactElement, useCallback, useState } from 'react';
// Components
import Table from './Table';
import Label from './Label';
import AddTodosForm from './AddTodosForm';
import Modal from './Modal';
import Button from './Button';
// Constants
import { DATE, STATUS, TASKS, TIME, PAUSED, ADD_TASK } from '../constants/text';
import COLUMN_TYPE_KEYS from '../constants/constants';
// Models
import { Column, Data } from '../models/table';
// Icons
import PlusIcon from '../icons/PlusIcon';
import EditIcon from '../icons/EditIcon';

const Todos = (): ReactElement => {
  const initialTodos: Data[] = [
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

  // States
  const [todos, setTodos] = useState<Data[]>(initialTodos);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<Data>({});

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

  /**
   * A function for generate status in table
   * @param todoItem: object type of table data model
   * @returns ReactElement
   */
  const generateActions = (todoItem: Data): ReactElement => {
    return (
      <span>
        <Button onClick={(): void => openModal(todoItem)} icon={<EditIcon />} />
      </span>
    );
  };

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
    {
      id: 4,
      title: '',
      column: 'task',
      type: COLUMN_TYPE_KEYS.component,
      component: generateActions,
    },
  ];

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
   * A function for add todos
   */
  const addTodo = (): void => {
    if (formData.id) {
      // Edit mode
      setTodos(
        todos.map((todo) => (todo.id === formData.id ? formData : todo)),
      );
    } else {
      // Create mode
      setTodos([
        ...todos,
        { id: todos.length + 1, ...formData, date: new Date().toString() },
      ]);
    }
    closeModal();
  };

  return (
    <div className="flex flex-col">
      <Button
        className="self-end"
        title={ADD_TASK}
        onClick={openModal}
        icon={<PlusIcon className="text-white" />}
      />
      <Modal
        isOpen={isModalOpen}
        title={ADD_TASK}
        onSubmit={addTodo}
        onClose={closeModal}
      >
        <AddTodosForm formData={formData} setFormData={setFormData} />
      </Modal>
      <Table data={todos} columns={columns} />
    </div>
  );
};

export default Todos;
