import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from './Task';
import { ITask, TasksCollection } from '../api/tasks';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  const createTask = (task: ITask) => {
    return <Task task={task} key={task._id}/>;
  }

  return (<div>
    <h1>Welcome to Meteor!</h1>
    <ul>
      { tasks.map((task) => createTask(task as ITask))}
    </ul>
  </div>);
};
