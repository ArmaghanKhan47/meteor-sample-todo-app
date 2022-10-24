import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Task } from './Task';
import { ITask, TasksCollection } from '../api/tasks';
import TaskForm from '../ui/forms/TaskForm';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, {sort: {createdAt: 1}}).fetch());

  const toggleChecked = ({ _id, isChecked }: {_id: string, isChecked: boolean}) => {
    TasksCollection.update(_id, {
      $set: {
        isChecked: !isChecked
      }
    })
  };

  const deleteTask = ({ _id }: {_id: string}) => TasksCollection.remove(_id);

  const createTask = (task: ITask) => {
    return <Task task={task} key={task._id} onCheckboxClick={toggleChecked} onDeleteClick={deleteTask}/>;
  }

  return (<div>
    <h1>Welcome to Meteor!</h1>

    <TaskForm/>

    <ul>
      { tasks.map((task) => createTask(task as ITask))}
    </ul>
  </div>);
};
