import React from 'react';
import { Task } from './Task';
import { ITask, TasksCollection } from '../api/tasks';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ul>
      { TasksCollection.map((task: ITask) => <Task key={task._id} task={task}/>)}
    </ul>
  </div>
);
