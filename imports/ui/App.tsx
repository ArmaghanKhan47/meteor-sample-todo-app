import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from './Task';
import { ITask, TasksCollection } from '../api/tasks';
import TaskForm from '../ui/forms/TaskForm';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, {sort: {createdAt: 1}}).fetch());

  const createTask = (task: ITask) => {
    return <Task task={task} key={task._id}/>;
  }

  return (<div>
    <h1>Welcome to Meteor!</h1>

    <TaskForm/>

    <ul>
      { tasks.map((task) => createTask(task as ITask))}
    </ul>
  </div>);
};
