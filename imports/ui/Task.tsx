import React from 'react';
import { ITask } from '../api/tasks';

interface Props {
  task: ITask,
  onCheckboxClick: Function,
  onDeleteClick: Function
}

export const Task: React.FunctionComponent<Props> = ({ task, onCheckboxClick, onDeleteClick }: Props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
      <button onClick={ () => onDeleteClick(task) }>&times;</button>
    </li>
  );
};