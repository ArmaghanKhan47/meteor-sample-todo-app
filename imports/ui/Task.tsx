import React from 'react';
import { ITask } from '../api/tasks';

interface Props {
  task: ITask
}

export const Task: React.FunctionComponent<Props> = ({ task }: Props) => {
  return <li>{task.text}</li>
};